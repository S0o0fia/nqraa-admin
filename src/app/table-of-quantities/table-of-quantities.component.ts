import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ng6OdooRPCService } from 'src/app/shared/services/angular6-odoo-jsonrpc.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
declare var $: any;

@Component({
  selector: 'app-table-of-quantities',
  templateUrl: './table-of-quantities.component.html',
  styleUrls: ['./table-of-quantities.component.css']
})
export class TableOfQuantitiesComponent implements OnInit {
  quantityForm: FormGroup;
  quantitiesList:any;
  db: string='nqproject';
  isValid:boolean=false;
  dateOfExamination:any;
  sessionRange:any;
  mainSectionList:any;
  mainList:any[]=[];
  firstSubSectionList:any;
  secondSubSectionList:any;
  selectedMainId:any;
  selectedFirstSubId:any;
  unitList:any;
  quantityDetails:any;
  defaultMainOption: any;
  firstSubSection: any;
  secondSubSection: any;
  defaultUnit: any;
  tPrice:any;


  constructor(private formBuilder: FormBuilder, private odooRPC: Ng6OdooRPCService,private toastr: ToastrService, private route:Router, private http:HttpClient) 
  {
    //form building
    this.quantityForm = this.formBuilder.group({
      mainSection: ['', Validators.required],
      firstSubSection: ['', Validators.required],
      secondSubSection: ['', Validators.required],
      itemNumber: ['', Validators.required],
      itemName:['', Validators.required],
      session:['', Validators.required],
      itemDescription:['', Validators.required],
      unit:['', Validators.required],
      unitPrice:['', Validators.required],
      contractQuantity:['', Validators.required],
      totalPrice:['', Validators.required],
    });
    //Initializing date picker
    $('#datepicker').datepicker({
      dateFormat: 'dd/mm/yy',
      autoclose: true
    }).on('changeDate', (ev)=>{
      this.dateOfExamination=$('#datepicker').val();
    });

    // set default dropdown options
    this.defaultMainOption = null;
    this.firstSubSection = null;
    this.secondSubSection = null;
    this.defaultUnit = null;

    //Quantities Model
    $('#btnAdd').click(function(){
      $('#quantities-modal').show();
    });

  }

  ngOnInit() {
    this.getQuantitesList();
    this.getMainSectionList();
    this.getUnitList();
  }

  getQuantitesList(){
    let prjId=localStorage.getItem('project_id');
    let projUrl=prjId==null?'/table-qty/get?token='+localStorage.getItem('token'):'/table-qty/get?token='+localStorage.getItem('token')+'&project_id='+prjId;
    this.odooRPC.getReq(projUrl).subscribe((data: any[])=>{
      this.quantitiesList = data;
      setTimeout(function () {
        $(function () {
          $('#quantityDataTable').DataTable(
            {
              "language": {
                "url": "../../../assets/json/Arabic.json"
              }
            }
          );
        });
      }, 100);
    });
  }

  getMainSectionList(){
    let mainSectionUrl='/section/get?token='+localStorage.getItem('token');
    this.odooRPC.getReq(mainSectionUrl).subscribe((data: any[])=>{
      // for(var i=0;i<data.length;i++){
      //   if(data[i].parent_id==false)
      //     this.mainList.push(data[i]);
      // }
      this.mainList=data.filter(x => x.parent_id == false);
      this.mainSectionList = data;
    });
  }

  getUnitList(){
    let uomUrl='/uoms/get?token='+localStorage.getItem('token');
    this.odooRPC.getReq(uomUrl).subscribe((data: any[])=>{
      this.unitList = data;
    });
  }

  onSelectMainSection(mainid) {
    this.selectedMainId=mainid;
    this.firstSubSectionList = this.mainSectionList
        .filter((item)=> item.parent_id == mainid);
  }

  onSelectFirstSubSection(subid) {
    this.selectedFirstSubId=subid;
    this.secondSubSectionList = this.mainSectionList
        .filter((item)=> item.parent_id == subid);
  }

  addQuantityUrl: string='/table-qty/create?db='+this.db+'&values=';

  valuechange(newValue) {
    let uId=this.unitList.find(s => s.name == this.quantityForm.get('unit').value).id;
    let uPrice=this.quantityForm.value.unitPrice;
    let uQuantity=this.quantityForm.value.contractQuantity;
    this.tPrice=uId==2?uPrice*uQuantity*12:uPrice*uQuantity;
  }
  onAddTableQuantityClick(){
    this.isValid=true;
    if(!this.quantityForm.valid){
    }else{
      let sId = this.secondSubSectionList.find(s => s.name == this.quantityForm.get('secondSubSection').value).id;
      let uId=this.unitList.find(s => s.name == this.quantityForm.get('unit').value).id;
      
      var req={
        "main_section_id":Number(this.selectedMainId),
        "first_subsection_id":Number(this.selectedFirstSubId),
        "second_subsection_id":sId,
        "item_number":this.quantityForm.value.itemNumber,
        "item_name":this.quantityForm.value.itemName,
        "session_from":this.quantityForm.value.session[0].toLocaleDateString(),
        "session_to":this.quantityForm.value.session[1].toLocaleDateString(),
        "description":this.quantityForm.value.itemDescription,
        "product_uom":uId,
        "item_qty":Number(this.quantityForm.value.contractQuantity),
        "price_unit":Number(this.quantityForm.value.unitPrice),
        "price_total":this.tPrice,
        "project_id":Number(localStorage.getItem('project_id')),
      }
      this.odooRPC.postReq(this.addQuantityUrl+JSON.stringify(req)+'&token='+localStorage.getItem('token')+'').subscribe((data: any)=>{
        
        if(data.msg=="TOQ Created Successfully"){
          this.toastr.success(data.msg);
          this.isValid=false;
          this.quantityForm.reset();
          $('#quantities-modal').modal('hide');
          // $('#quantities-modal').hide();
          this.getQuantitesList();
        }else{
          this.toastr.error(data.msg);
        }
      });
    }
  }

}
