import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ng6OdooRPCService } from 'src/app/shared/services/angular6-odoo-jsonrpc.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-request-for-inspection',
  templateUrl: './request-for-inspection.component.html',
  styleUrls: ['./request-for-inspection.component.css']
})
export class RequestForInspectionComponent implements OnInit {

  inspectionForm: FormGroup;
  rfiList:any;
  requestTypes:any;
  db: string='nqproject';
  isValid:boolean=false;
  dateOfExamination:any=new Date();
  defaultReqType:any;
  defaultItem:any;
  defaultWorkSite:any;
  workSites:any;
  //today declare variables
  addItems: any[] = [];
  ItemsList: any[] = [];
  itemValue: any=null;
  quantity: any;
  requestValue: any;
  requestTypeValue: any=null;
  workFrom:any=null;
  selecteditemValue: any;
  itemsList: any[] = [];
  prjId:any=localStorage.getItem('project_id');
  constructor(private formBuilder: FormBuilder, private odooRPC: Ng6OdooRPCService,private toastr: ToastrService,private router:Router) 
  {
    //form building
    this.inspectionForm = this.formBuilder.group({
      orderNumber: ['', Validators.required],
      requestType: ['', Validators.required],
      workSite: ['', Validators.required],
      dateOfExamination: ['', Validators.required],
      itemNumber:['', Validators.required]
    });
   
    //Initializing date picker
    $('#datepicker').datepicker({
      defaultDate: new Date(),
      dateFormat: 'dd/mm/yy',
      autoclose: true
    }).on('changeDate', (ev) => {
      this.dateOfExamination = $('#datepicker').val();
    });

    // set current date
    var dd = this.dateOfExamination.getDate(); 
    var mm = this.dateOfExamination.getMonth() + 1; 

    var yyyy = this.dateOfExamination.getFullYear(); 
    if (dd < 10) { 
        dd = '0' + dd; 
    } 
    if (mm < 10) { 
        mm = '0' + mm; 
    } 
   this.dateOfExamination = mm + '/' + dd + '/' + yyyy; 

   this.defaultReqType=null;
    this.defaultItem=null;
    this.defaultWorkSite=null;
  }

  ngOnInit() {
        // // LINE CHART
        let morris = window['Morris'];
        const line = new morris.Line({
          element: 'line-chart',
          resize: true,
          data: [
            { y: '2011 Q1', item1: 2666 },
            { y: '2011 Q2', item1: 2778 },
            { y: '2011 Q3', item1: 4912 },
            { y: '2011 Q4', item1: 3767 },
            { y: '2012 Q1', item1: 6810 },
            { y: '2012 Q2', item1: 5670 },
            { y: '2012 Q3', item1: 4820 },
            { y: '2012 Q4', item1: 15073 },
            { y: '2013 Q1', item1: 10687 },
            { y: '2013 Q2', item1: 8432 }
          ],
          xkey: 'y',
          ykeys: ['item1'],
          labels: ['Item 1'],
          lineColors: ['#981a1e'],
          hideHover: 'auto'
        });
    this.getRfiList();
    this.getRequestTypes();
    this.getItemsList();
    this.getWorkSites();
    this.ItemsList = [
      { "Name": "Alabama", "Value": "1" },
      { "Name": "Alaska", "Value": "2" },
      { "Name": "California", "Value": "3" },
      { "Name": "Delaware", "Value": "4" },
      { "Name": "Tennessee", "Value": "5" },
      { "Name": "Texas", "Value": "6" },
      { "Name": "Washington", "Value": "7" },
    ];
      this.allJqueryEvents();
  }

    /* all jquery related functions and events  */
    allJqueryEvents()
    {
     //date of examination date
     $('#datepicker').datepicker({
       dateFormat: 'mm/dd/yy',
       autoclose: true
     }).on('changeDate', (ev) => {
       this.dateOfExamination = $('#datepicker').val();
       //alert($('#datepicker').val());
     });
 
     // avoid model disapper when click on outside
    //  $("#btnAdd").click(function () {
    //    $('#inspection-modal').modal({
    //      backdrop: 'static',
    //      keyboard: false
    //    })
    //  });
   }

  getRfiList(){
    let rfiUrl=this.prjId==null?'/rfi/get?db='+this.db+'&token='+localStorage.getItem('token'):'/rfi/get?db='+this.db+'&token='+localStorage.getItem('token')+'&project_id='+this.prjId;
    this.odooRPC.getReq(rfiUrl).subscribe((data: any[])=>{
      this.rfiList = data;
      setTimeout(function () {
        $(function () {
          $('#rfiDataTable').DataTable(
            {
              "language": {
                "url": "../../../assets/json/Arabic.json"
              }
            });
        });
      }, 100);
    });
  }

// request type dropdown
onRequestType(item) {
  switch (item) {
    case "1":
      this.requestValue = 10;
      break;
    case "2":
      this.requestValue = 20;
      break;
    case "3":
      this.requestValue = 30;
      break;
    case "4":
      this.requestValue = 40;
      break;
    case "5":
      this.requestValue = 50;
      break;
    case "6":
      this.requestValue = 60;
      break;
    case "7":
      this.requestValue = 70;
      break;
    default:
      console.log("No such day exists!");
      break;
  }
}

// work from drop down
onSelectItem(itm) {
  debugger;
  var Value=this.itemsList.filter((item)=>item.id==itm);
  this.selecteditemValue=Value[0].item_qty;
}

  onAddInspectionClick() {
    this.isValid=true;
    if(!this.inspectionForm.valid){

    }else{
      var reqObject = {
        "itemValue": this.inspectionForm.value.itemNumber,
        "quanitity": this.selecteditemValue
      }

      this.addItems.push(reqObject);
      //this.itemCount=this.addItems.length;
    }
  }

    // remove sub table values
    onDeleteItem(item) {
      const index = this.addItems.indexOf(item, 0);
      if (index > -1) {
        this.addItems.splice(index, 1);
      }
    }

    getRequestTypes(){
      let rtypeUrl='/project-request/get?db='+this.db+'&token='+localStorage.getItem('token');
      this.odooRPC.getReq(rtypeUrl).subscribe((data: any[])=>{
        this.requestTypes = data;
      });
    }

    getItemsList(){
      let rtypeUrl=this.prjId==null?'/table-qty/get?db='+this.db+'&token='+localStorage.getItem('token'):'/table-qty/get?db='+this.db+'&token='+localStorage.getItem('token')+'&project_id='+this.prjId;
      this.odooRPC.getReq(rtypeUrl).subscribe((data: any[])=>{
        this.itemsList = data;
      });
    }

    getWorkSites(){
      let workSiteUrl=this.prjId==null?'/work/get?db='+this.db+'&token='+localStorage.getItem('token'):'/work/get?db='+this.db+'&token='+localStorage.getItem('token')+'&project_id='+this.prjId;
      this.odooRPC.getReq(workSiteUrl).subscribe((data: any[])=>{
        this.workSites = data;
      });
    }

    createReqUrl: string='/rfi/create?db='+this.db+'&values=';
    onAddRequest(){
      debugger;
      this.isValid=true;
      if(!this.inspectionForm.valid){
      }else{
        //let wId = this.workSites.find(s => s.name == this.inspectionForm.value.workSite).work_id;
        var req={
          "request_num":this.inspectionForm.value.orderNumber,
          "request_type":this.inspectionForm.value.requestType,
          "inspect_date":this.dateOfExamination,
          "quantity_id":this.inspectionForm.value.itemNumber,
          "item_qty":this.selecteditemValue,
          "work_id":this.inspectionForm.value.workSite.value,
          "request_id":this.prjId
        }
        this.odooRPC.postReq(this.createReqUrl+JSON.stringify(req)+'&token='+localStorage.getItem('token')+'').subscribe((data: any)=>{          
          if(data.msg=="Inspection request created successfully"){
            this.toastr.success(data.msg);
            this.isValid=false;
            this.inspectionForm.reset();
            $('#inspection-modal').hide();
            this.getRfiList();
          }else{
            this.toastr.error(data.msg);
          }
        });
      }
    }
}