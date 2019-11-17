export const adminLteConf = {
  skin: 'blue',
  // isSidebarLeftCollapsed: false,
  // isSidebarLeftExpandOnOver: false,
  // isSidebarLeftMouseOver: false,
  // isSidebarLeftMini: true,
  // sidebarRightSkin: 'dark',
  // isSidebarRightCollapsed: true,
  // isSidebarRightOverContent: true,
  // layout: 'normal',
  sidebarLeftMenu: [
    {label: 'MAIN NAVIGATION', separator: true},
    
    {label: 'الرئيسية', route: '/dashboard', iconClasses: 'fa fa-home'},
    {label: 'تقرير المشاريع', iconClasses: 'fa fa-tasks',children: [
      {label: '  المشاريع الكلية', route: '/projects', iconClasses: 'fa fa-tasks'},
      {label:'الكميات المعتمدة', route: '/table-of-quantities', iconClasses: 'fa fa-stack-overflow'},
        ]},
    {label: 'مشروع جديد', route: '/project/create-project', iconClasses: 'fa fa-folder-open'},    
    {label: 'الحضور والانصراف', route: '/attendace', iconClasses: 'fa fa-clock-o'},   
    {label: 'التقارير', iconClasses: 'fa fa-area-chart', children: [
      {label: 'Flot Reports', route: 'reports/flot-reports'},
      {label: 'Inline Reports', route: 'reports/inline-reports'},
      {label: 'JS Reports', route: 'reports/js-reports'},
    ]},
    {label: 'إدارة البرامج الزمنية', route: '/request-for-inspection', iconClasses: 'fa fa-clock-o'},
    {label: 'إدارة المخاطر', route: '/request-for-inspection', iconClasses: 'fa fa-warning'},
    {label: 'الأمن والسلامة', route: '/SaftyandSecurity', iconClasses: 'fa fa-warning'},

    {label: 'المناطق الحرجة', iconClasses: 'fa fa-exclamation-circle', children: [
      {label: 'المناطق الحرجة للمشاريع', route: '/criticalarea' , iconClasses: 'fa fa-tasks',},
      {label: 'خريطة المناطق الحرجة', route: 'reports/inline-reports' , iconClasses: 'fa fa-map-marker'},
      
    ]},
    {label: 'بلاغات مركز الطوارئ', route: '/request-for-inspection', iconClasses: 'fa fa-comment'},
    {label: 'مواقع تجمعات الأمطار الحرجة', iconClasses: 'fa fa-area-chart' ,children: [
      {label: 'إضافة منطقة', route: 'reports/flot-reports' , iconClasses: 'fa fa-plus',},
      {label: 'أرشيف المناطق', route: 'reports/inline-reports' , iconClasses: 'fa fa-archive'},
      
    ]},
    {label: 'التعاميم', route: '/request-for-inspection', iconClasses: 'fa fa-sign-out'},
    {label: 'حالة الملفات', route: '/request-for-inspection', iconClasses: 'fa fa-shield'},
    {label: 'نظم إدارة الجودة /إيزو9001 ', route: '/request-for-inspection', iconClasses: 'fa fa-shield'},
    {label: 'استبيان مشاريع السيول', route: '/request-for-inspection', iconClasses: 'fa fa-text-file'},

    {label: 'الخرائط العامة', iconClasses: 'fa fa-map-marker', children: [
      {label: 'المشاريع الجارية', route: 'reports/flot-reports' , iconClasses: 'fa fa-tasks',},
      {label: 'المشاريع قيد الطرح', route: 'reports/inline-reports' , iconClasses: 'fa fa-spinner'},
      {label: 'المشاريع المسلمة', route: 'reports/inline-reports' , iconClasses: 'fa fa-truck '},
      
    ]},

    {label: 'Whatsapp', route: '/request-for-inspection', iconClasses: 'fa fa-whatsapp'},

    {label: 'الإعدادات', iconClasses: 'fa fa-cogs', children: [
      {label: 'الحسابات', route: 'reports/inline-reports' , iconClasses: 'fa fa-users'},
      {label: 'الصلاحيات', route: 'reports/flot-reports' , iconClasses: 'fa fa-universal-access',},
      {label: 'إدارة الشركات', route: 'reports/inline-reports' , iconClasses: 'fa fa-building-o '}      
    ]},
    {label: 'تسجيل الخروج', route: '/request-for-inspection', iconClasses: 'fa fa-sign-out'},

    //{label: 'Home', route: '/', iconClasses: 'fa fa-road', pullRights: [{text: 'New', classes: 'label pull-right bg-green'}]},
  
    // {label: 'Reports', route: '/charts', iconClasses: 'fa fa-area-chart'},
    // {label: 'Project', iconClasses: 'fa fa-th-list', children: [
    //   {label: 'Create Project', route: 'project/create-project'},
    //   {label: 'Projects List', route: 'project/project-list'}
    // ]},
   
    // {label: 'Layout', iconClasses: 'fa fa-th-list', children: [
    //     {label: 'Configuration', route: 'layout/configuration'},
    //     {label: 'Custom', route: 'layout/custom'},
    //     {label: 'Header', route: 'layout/header'},
    //     {label: 'Sidebar Left', route: 'layout/sidebar-left'},
    //     {label: 'Sidebar Right', route: 'layout/sidebar-right'},
    //     {label: 'Content', route: 'layout/content'}
    //   ]},
    // {label: 'COMPONENTS', separator: true},
    // {label: 'Accordion', route: 'accordion', iconClasses: 'fa fa-tasks'},
    // {label: 'Alert', route: 'alert', iconClasses: 'fa fa-exclamation-triangle'},
    // {label: 'Modal', route: 'modal', iconClasses: 'fa fa-tag'},
    // {label: 'Boxs', iconClasses: 'fa fa-files-o', children: [
    //     {label: 'Default Box', route: 'boxs/box'},
    //     {label: 'Info Box', route: 'boxs/info-box'},
    //     {label: 'Small Box', route: 'boxs/small-box'}
    //   ]},
    // {label: 'Dropdown', route: 'dropdown', iconClasses: 'fa fa-arrows-v'},
    // {label: 'Form', iconClasses: 'fa fa-files-o', children: [
    //     {label: 'Input Text', route: 'form/input-text'}
    // ]},
    // {label: 'Tabs', route: 'tabs', iconClasses: 'fa fa-th'}
  ]
};
