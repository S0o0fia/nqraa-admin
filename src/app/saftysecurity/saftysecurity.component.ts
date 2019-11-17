import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saftysecurity',
  templateUrl: './saftysecurity.component.html',
  styleUrls: ['./saftysecurity.component.css']
})
export class SaftysecurityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   coinwallet: string[] = ['الملاحظات','العمال','الموقع' ,'اللوحات'];

  selectedwallet = this.coinwallet[0];
  
  RowsforData4 : string[] = ['لوحات إرشادية قبل المخارج والدوارات' , 'لوحات مناسبة لتحديد السرعة' 
  ,'المسافات بين لوحدات تحديد السرعة' ,'لوحة توجيه أسهم',
  'لوحة معلومات في البداية والنهاية','لوحة أمن وسلامة',
  'أرقام الطوارئ','الفسح في الموقع','لوحة المعلومات واضحة و معلوماتها قيمة'];


  RowsforData3 : string[] = ['مكان إسعافات أولية',
  'مكان إسعافات أولية','نظافة الموقع','تقييم التوصيلات الكهربائية','يجب أن يمنع دخول الأشخاص'
  ,'يجب أن يكون مشدود و ليس مهمل','يجب أن يكون بإرتفاع 90 سنتيميتر','المسافة بين حافة الحفرية و الحواجز الخرسانية'
  ,'إزالة الحواجز المتضررة','استقامة الحواجز','نوع الحواجز',
  'مقاس الحواجز','المسافات بين الحواجز','طلاء عاكس للحواجز'];

  RowsforData2 : string[] = ['إرتداء جميع الموظيفين أدوات السلامة' ,'شخص مسؤول أمن و سلامة'];
}
