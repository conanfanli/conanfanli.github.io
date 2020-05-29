(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"c",function(){return a});var a,r=n(34);n.d(t,"a",function(){return r.a}),n.d(t,"b",function(){return r.d}),function(e){e.Root="/",e.LoginPage="/LoginPage",e.TransactionList="/TransactionList",e.TransactionChart="/TransactionChart",e.CategoryPage="/CategoryPage"}(a||(a={}))},110:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o});var a=window.location.protocol+"//"+window.location.hostname+":"+(window.location.port?"8000":""),r=a+"/api2";function o(e){var t=r+"/"+e.endpoint+"/",n=e.authToken;return fetch(t,{method:"POST",body:JSON.stringify(e.jsonBody),headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest",Authorization:n?"JWT "+n:""}})}},111:function(e,t,n){"use strict";n.d(t,"b",function(){return i});var a=n(540),r=n(28),o=n(20),c=n(22),i={balance:"",user_id:0,events:[],categories:[],authToken:null,isAuthenticated:!1,snacks:[],transactions:[]};var l=function(e,t){return function(n,a){return void 0===n&&(n=e),t.hasOwnProperty(a.type)?t[a.type](n,a):n}}(i.snacks,{EAT_SNACK:function(e){return e.slice(1).slice()},ADD_SNACK:function(e,t){return e.concat([t.snack])}}),u=function(e,t,n){return Object(a.a)("BUTLER_ANSWERED",function(t,a){if(!a.response[e])return t;if("replace"===a.updateType)return a.response[e];if("do-nothing"===a.updateType)return t;if("remove"===a.updateType)return t.slice().filter(function(t){return!a.response[e].find(function(e){return e.id===t.id})});if("merge-append"===a.updateType){var o=Object(c.e)(t,a.response[e],"append");return n?r.sortBy(o,n):o}throw new Error("not handled")},t)},s=Object(o.combineReducers)({snacks:l,transactions:u("transactions",i.transactions,function(e){return-1*e.issued_date}),authToken:u("authToken",i.authToken),categories:u("categories",i.categories),events:u("events",i.events,function(e){return-1*new Date(e.created_ts).getTime()}),balance:u("balance",i.balance),user_id:u("user_id",i.balance)});t.a=s},15:function(e,t,n){"use strict";n.d(t,"c",function(){return c}),n.d(t,"a",function(){return i}),n.d(t,"b",function(){return l});var a=n(0),r=n(10),o=n(111),c=a.createContext({}),i=a.createContext(r.a),l=a.createContext(o.b)},16:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return c});var a=n(45),r=Object(a.a)(),o=function(e,t,n){void 0===n&&(n=null);var a=t&&t&&Object.keys(t).length?"?urlState="+JSON.stringify(t):"";return r.push({pathname:e,search:a,state:n})},c=function(){var e=r.location.pathname;return e.endsWith("/")?e.slice(0,e.length-1)||"/":e}},173:function(e,t,n){"use strict";n.d(t,"a",function(){return C});var a=n(21),r=n(541),o=n(256),c=n(242),i=n.n(c),l=n(243),u=n.n(l),s=n(0),d=n(123),m=n.n(d),p=n(25),f=n(20),E=n(244),g=n.n(E),h=n(22),b=n(10);i()(m.a.Highcharts),u()(m.a.Highcharts);var y=function(e){return{chart:{type:"column"},title:{text:"Income/Expense Report"},xAxis:{type:"category"},yAxis:{min:0,title:{text:"Spend",align:"high"},labels:{overflow:"justify"}},tooltip:{valueSuffix:" dollars"},plotOptions:{bar:{dataLabels:{enabled:!0}},column:{dataLabels:{enabled:!0},allowPointSelect:!1,events:{click:e.onClickColumn}}},legend:{enabled:!0,layout:"vertical",align:"right",verticalAlign:"top",x:-40,y:80,floating:!0,borderWidth:1,shadow:!0},credits:{enabled:!1}}},v=function(e){function t(t){var n=e.call(this,t)||this;n.onChangeReportType=function(e){n.showReport(e.target.value)};var a=y({onClickColumn:n.onClickColumn.bind(n)});return n.state={config:a,chart:null,reportTitle:"",report_type:t.initialReportType},n}return a.b(t,e),t.prototype.onClickColumn=function(e){if("INCOME_EXPENSE"===this.state.report_type)return console.log(e)},t.prototype.getReportTitle=function(e){return"INCOME_EXPENSE"==e?"Income/Expense Report":"Expense Report"},t.prototype.showReport=function(e){var t=this,n=new Date,a=new Date;a.setDate(a.getDate()-180);var r="INCOME_EXPENSE"===e?"GetIncomeExpenseReport":"GetExpenseReport";this.props.butler[r]({start_date:Object(h.c)(a),end_date:Object(h.c)(n)},"do-nothing",function(n){var a=g()({title:{text:t.getReportTitle(e)}},t.state.config),r=Object.assign({},a,n.chart_data);t.setState({chart:s.createElement(m.a,{config:r})}),t.setState({report_type:e,config:r})})},t.prototype.componentDidMount=function(){this.showReport(this.state.report_type)},t.prototype.render=function(){return this.state.config?s.createElement("div",null,s.createElement(r.a,{value:this.state.report_type,onChange:this.onChangeReportType},s.createElement(o.a,{value:"INCOME_EXPENSE"},"Income/Expense"),s.createElement(o.a,{value:"EXPENSE"},"Expense")),s.createElement("p",null,this.state.reportTitle),this.state.chart):s.createElement("p",null,"Loading ...")},t}(s.Component),C=Object(p.b)(null,function(e){return{butler:Object(f.bindActionCreators)(b.a,e)}})(v)},176:function(e,t,n){"use strict";var a=n(28),r=n(586),o=n(258),c=n(0),i=n(47),l=n(21),u=n(259),s=n(25),d=n(20),m=n(34),p=(new Date).toISOString().slice(0,10),f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={start_date:p,end_date:p},t.importTransactions=function(){"plaid"===t.props.origin?t.props.butler.ImportFromPlaid({start_date:t.state.start_date,end_date:t.state.end_date},"merge-append"):t.props.butler.ImportFromWave({start_date:t.state.start_date,end_date:t.state.end_date},"merge-append")},t.setStartDate=function(e){t.setState({start_date:e.target.value})},t.setEndDate=function(e){t.setState({end_date:e.target.value})},t}return l.b(t,e),t.prototype.render=function(){return c.createElement(r.a,{container:!0},c.createElement(r.a,{item:!0,xs:4},c.createElement(u.a,{type:"date",label:"from",value:this.state.start_date,onChange:this.setStartDate})),c.createElement(r.a,{item:!0,xs:4},c.createElement(u.a,{type:"date",label:"to",defaultValue:p,onChange:this.setEndDate})),c.createElement(r.a,{item:!0,xs:4},c.createElement(o.a,{onClick:this.importTransactions,style:{marginTop:"10px"},color:"primary",variant:"contained"},"Import")))},t}(c.Component),E=Object(s.b)(null,function(e){return{butler:Object(d.bindActionCreators)(m.a,e)}})(f),g=n(614),h=n(587),b=n(541),y=n(256),v=n(588),C=n(589),_=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onFileInputChange=function(e){var n=e.target.files[0],a=new FileReader;a.addEventListener("load",function(){return t.props.submitFileContent(a.result)},!1),n&&a.readAsText(n)},t}return l.b(t,e),t.prototype.render=function(){var e=this,t=this.props.button||c.createElement(o.a,{variant:"outlined",component:"span"},"Upload");return c.createElement("div",null,c.createElement("input",{id:"file-upload-form",hidden:!0,ref:function(t){return e.fileInput=t},onChange:this.onFileInputChange,type:"file"}),c.createElement("label",{htmlFor:"file-upload-form"},t))},t}(c.Component),T=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={selectedSource:m.c.CHEQUE},t.onSelectType=function(e){t.setState({selectedSource:e.target.value})},t.submitFileContent=function(e){console.log(e),t.state.selectedSource.length&&e&&t.props.butler.UploadStatement({source:t.state.selectedSource,content:e},"merge-append")},t}return l.b(t,e),t.prototype.render=function(){var e=this;return c.createElement("div",{style:{paddingTop:"10px"}},c.createElement(g.a,{expanded:!0},c.createElement(h.a,null,c.createElement(r.a,{container:!0,spacing:10},c.createElement(r.a,{item:!0,xs:6,sm:4},c.createElement(b.a,{value:this.state.selectedSource,onChange:this.onSelectType},["CHEQUE","PC_MASTER","SCOTIA_MASTER","VISA"].map(function(e){return c.createElement(y.a,{key:e,value:e},e)}))),c.createElement(r.a,{item:!0,xs:6,sm:4},c.createElement(_,{submitFileContent:this.submitFileContent})))),c.createElement(v.a,null),c.createElement(C.a,null,c.createElement(o.a,{size:"small",onClick:function(){e.props.onClose()}},"Cancel"))))},t}(c.Component),S=Object(s.b)(null,function(e){return{butler:Object(d.bindActionCreators)(m.a,e)}})(T),k=n(580),x=n(610),O=n(590),w=n(591),j=n(122),A=function(e){var t=e.choices,n=e.value,a=e.onSelectOption,r=c.useState(!1),i=r[0],l=r[1],u=function(e,t){if(!e)return null;var n=t.find(function(t){return t.value===e});if(!n)throw console.log(t),new Error(e+" not found ");return n}(n,t);return c.createElement("div",null,c.createElement(o.a,{onClick:function(){return l(!0)},variant:"outlined",color:"primary"},u?c.createElement(k.a,{style:{marginRight:"5px"}},u.mui_icon_id):null,u?u.label:"Select a Category"),c.createElement(x.a,{open:i,fullWidth:!0,onClose:function(){return l(!1)}},c.createElement(O.a,null,"Select a Category"),c.createElement(w.a,null,c.createElement(j.a,{onSelectOption:function(e){a(e),l(!1)},defaultValue:u?u.value:void 0,placeholder:"Select a category",options:t}))))},I=n(15),L=n(22),P={issued_date:{type:"date",required:!0},merchant:{type:"text",required:!0},notes:{type:"text",required:!1},category_id:{type:"number",required:!1},balance_adjust:{type:"number",required:!1},total_amount:{type:"number",required:!0}},U=function(e){var t=e.fieldName,n=e.updateField,a=e.instance,r=P[t],o=!1;return r.required&&!a[t]?o=!0:r.required&&"number"===r.type&&!a[t]&&(o=!0),c.createElement(u.a,{type:r.type,required:r.required,error:o,label:t,value:a[t],onChange:n(t)})},N={issued_date:Object(L.d)(),merchant:"",notes:"",category_id:null,total_amount:"0",balance_adjust:"0"},R=function(e){var t,n=e.selectableCategories,a=e.onClose,i=c.useState(N),l=i[0],u=i[1],s=c.useContext(I.a),d=function(e){var t=l;return function(n){var a,r=Object.assign({},t,((a={})[e]=n.target.value,a));u(r)}},m=l;return c.createElement("div",{style:{paddingTop:"10px"}},c.createElement(g.a,{expanded:!0},c.createElement(h.a,null,c.createElement(r.a,{container:!0,spacing:10},c.createElement(r.a,{item:!0,xs:6,sm:4},c.createElement(U,{instance:m,fieldName:"issued_date",updateField:d})),c.createElement(r.a,{item:!0,xs:6,sm:4},c.createElement(U,{fieldName:"merchant",instance:m,updateField:d})),c.createElement(r.a,{item:!0,xs:6,sm:4},c.createElement(U,{fieldName:"total_amount",instance:m,updateField:d})),c.createElement(r.a,{item:!0,xs:6,sm:4},c.createElement(A,{value:m.category_id||"",onSelectOption:function(e){var t=Object.assign({},l,{category_id:e.value});u(t)},choices:n.map(function(e){return{value:e.id,label:e.description,mui_icon_id:e.mui_icon_id}})})),c.createElement(r.a,{item:!0,xs:6,sm:4},c.createElement(U,{fieldName:"notes",instance:m,updateField:d})),c.createElement(r.a,{item:!0,xs:6,sm:4},c.createElement(U,{fieldName:"balance_adjust",instance:m,updateField:d})))),c.createElement(v.a,null),c.createElement(C.a,null,c.createElement(o.a,{size:"small",onClick:function(){u(N),a()}},"Cancel"),c.createElement(o.a,{size:"small",color:"primary",onClick:function(){s.CreateTransaction(l,"merge-append",function(e){a()})},disabled:(t=l,![t.issued_date,t.merchant,+t.total_amount].every(Boolean))},"Save"))))},D=n(594),F=n(595),M=n(612),B=n(538),G=n(81),H=n(579),W=n(537),q=n(596),z=n(597),K=n(598),V=n(599),X=n(600),J=n(601),Q=n(592),$=n(255),Y=n(593),Z=n(16),ee=n(10),te=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={anchorEl:null},t.debounced=a.debounce(function(e){return t.props.butler.ListTransactions({search_text:e},"replace",function(t){return Object(Z.c)(ee.c.TransactionList,{search_text:e})})},500),t.onFocus=function(e){t.setState({anchorEl:e.currentTarget})},t.handleClose=function(e){t.setState({anchorEl:null})},t.onSearch=function(e){t.debounced(e.target.value)},t}return l.b(t,e),t.prototype.render=function(){var e=this,t=c.createElement(Q.a,{position:"start"},c.createElement(Y.a,null));return c.createElement("div",null,c.createElement(u.a,{onChange:this.onSearch,InputProps:{startAdornment:c.createElement(Q.a,{position:"start"},t)}}),c.createElement($.a,{open:!!this.state.anchorEl,anchorEl:this.state.anchorEl,onClose:this.handleClose,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"}},this.props.suggestions.map(function(t,n){return c.createElement(y.a,{key:n,onClick:function(){e.props.butler.ListTransactions({},"replace")}},t.label)})))},t}(c.Component),ne=Object(s.b)(function(e,t){return{suggestions:[]}},function(e){return{butler:Object(d.bindActionCreators)(ee.a,e)}})(te),ae=Object(L.a)(function(e){return{balance:e.balance}})(function(e){var t=c.useContext(I.a);return c.useEffect(function(){e.balance||t.GetUserBalance({},"replace")}),c.createElement(D.a,{position:"static",color:"default"},c.createElement(F.a,null,c.createElement(M.a,{title:"Timeline"},c.createElement(B.a,{onClick:function(){e.toggleTimeline()}},c.createElement(q.a,null))),e.balance?c.createElement(G.a,{variant:"body1",key:"balance"},"Balance: $"+e.balance):null,c.createElement("div",{style:{flex:1}}),c.createElement(ne,null),c.createElement(j.b,{icon:c.createElement(z.a,null)},c.createElement(y.a,{key:"new-transaction-menu",onClick:function(){e.showForm("transaction")}},c.createElement(H.a,null,c.createElement(K.a,null)),c.createElement(W.a,null,"Transaction")),c.createElement(y.a,{key:"new-statement-menu",onClick:function(){e.showForm("statement")}},c.createElement(H.a,null,c.createElement(V.a,null)),c.createElement(W.a,null,"Statement")),c.createElement(y.a,{key:"new-wave-menu",onClick:function(){e.showForm("wave")}},c.createElement(H.a,null,c.createElement(X.a,{color:"primary"})),c.createElement(W.a,null,"Wave Import")),c.createElement(y.a,{key:"new-plaid-menu",onClick:function(){e.showForm("plaid")}},c.createElement(H.a,null,c.createElement(J.a,{color:"primary"})),c.createElement(W.a,null,"Plaid Import"))),c.createElement(B.a,{onClick:function(){sessionStorage.removeItem("authToken"),window.location.href="/"}},c.createElement(k.a,{className:"material-icons"},"exit_to_app"))))}),re=n(604),oe=n(605),ce=n(606),ie=n(251),le=n.n(ie),ue=n(602),se=n(603),de=function(e){var t=e.prediction,n=e.onAccept,a=t.split?"Split ":"";return c.createElement("div",{style:{color:"rgb(0, 188, 212)",fontWeight:"bold"}},""+a+t.category_name+"?",c.createElement(r.a,{container:!0},c.createElement(r.a,{item:!0,xs:12,sm:1},c.createElement(B.a,{onClick:function(){return n()}},c.createElement(ue.a,{color:"primary"}))),c.createElement(r.a,{item:!0,xs:12,sm:1},c.createElement(B.a,{onClick:function(){}},c.createElement(se.a,{color:"secondary"})))))},me=function(e){var t=e.selectableCategories,n=e.transaction,a=c.useContext(I.a);return t.length?c.createElement(A,{value:n.category_id||null,onSelectOption:function(e){a.UpdateTransaction({id:n.id,category_id:e.value},"merge-append")},choices:t.map(function(e){return{value:e.id,label:e.description,mui_icon_id:e.mui_icon_id}})}):c.createElement("div",null)},pe=function(e){var t=e.helperText,n=e.setter,r=e.onBounce,o=e.type,i=e.value,l=c.useCallback(a.debounce(r,1e3),[]);return c.createElement(u.a,{helperText:t,type:o,onChange:function(e){n(e.target.value),l(e.target.value)},value:i})},fe=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l.b(t,e),t.prototype.render=function(){return c.createElement(k.a,{style:{color:"blue",float:"left"},className:"material-icons"},"grid_on")},t}(c.Component),Ee=function(e){var t=e.transaction,n=e.category,a=e.onAccept,o=t.prediction,i=e.user_id===t.lender_id?1:-1;return!t.category_id&&o?c.createElement(de,{prediction:o,onAccept:function(){return a({id:t.id,category_id:o.category_id,balance_adjust:o.split?(i*parseFloat(t.total_amount)/2).toString():"0"})}}):c.createElement(r.a,{container:!0,spacing:10},c.createElement(r.a,{item:!0,xs:1},c.createElement(k.a,{className:"material-icons"},n?n.mui_icon_id:null)),c.createElement(r.a,{item:!0,xs:!0},n?c.createElement(G.a,{color:"textSecondary"},n.description):null))},ge=Object(L.a)(function(e){return{selectableCategories:Object(i.b)(e),user_id:e.user_id}})(c.memo(function(e){var t=e.user_id,n=e.selectableCategories,a=e.transaction,o=e.expanded,i=e.onToggleExpansion,u=c.useContext(I.a);console.log("render row");var s=c.useState(a.balance_adjust),d=s[0],m=s[1];return c.createElement("div",null,c.createElement(g.a,{disabled:!a.editable,expanded:o,onChange:i},c.createElement(h.a,null,c.createElement(r.a,{container:!0,spacing:10},c.createElement(r.a,{item:!0,xs:3,sm:4},c.createElement(G.a,null,Object(L.b)(a.issued_date)),o?null:c.createElement(Ee,{user_id:t,transaction:a,category:a.category_id&&n.find(function(e){return e.id===a.category_id})||null,onAccept:function(e){u.UpdateTransaction(l.a({},e),"merge-append",function(){return e.balance_adjust?u.GetUserBalance({},"replace"):null})}})),c.createElement(r.a,{item:!0,xs:6,sm:4},a.origin_payload?c.createElement(M.a,{title:c.createElement(le.a,{shouldExpandNode:function(){return!0},data:a.origin_payload})},a.origin_payload.anchor_account_name?c.createElement(k.a,{style:{color:"blue",float:"left"},className:"material-icons"},"waves"):c.createElement(fe,null)):null,c.createElement(G.a,{variant:"body1"},a.merchant),c.createElement("div",null,c.createElement(G.a,{color:"textSecondary"},a.account_name),c.createElement(G.a,{color:"textSecondary"},a.plaid_category),c.createElement(G.a,{color:"textSecondary"},a.notes))),c.createElement(r.a,{item:!0,xs:3,sm:4,style:{paddingLeft:"40px"}},c.createElement(G.a,null,"$"+a.total_amount),+a.balance_adjust&&!o?c.createElement(G.a,{style:{color:+a.balance_adjust>0?"green":"red"}},"$"+a.balance_adjust):null))),c.createElement(re.a,null,c.createElement(r.a,{container:!0,spacing:10},c.createElement(r.a,{item:!0,xs:6,sm:4},c.createElement(pe,{helperText:"notes",setter:function(){},onBounce:function(e){return u.UpdateTransaction({id:a.id,notes:e},"merge-append")}})),c.createElement(r.a,{item:!0,xs:6,sm:4},c.createElement(me,l.a({},{transaction:a,selectableCategories:n,butler:u}))),c.createElement(r.a,{item:!0,xs:6,sm:3},c.createElement(pe,{type:"number",helperText:"Balance Adjust",value:d,setter:m,onBounce:function(e){u.UpdateTransaction({id:a.id,balance_adjust:e},"merge-append",function(){return u.GetUserBalance({},"replace")})}})),c.createElement(r.a,{item:!0,xs:6,sm:1,style:{textAlign:"right"}},c.createElement(oe.a,{size:"medium",color:"secondary","aria-label":"Delete",onClick:function(){return u.ArchiveTransaction({id:a.id},"remove")}},c.createElement(ce.a,null)))))))},function(e,t){return!(!a.isEqual(e.transaction,t.transaction)||e.expanded!==t.expanded||e.selectableCategories.length!==t.selectableCategories.length)})),he=n(536),be=n(257),ye=n(585),ve=n(607),Ce=n(110),_e=function(e){var t=c.useContext(I.c),n=c.useContext(I.a),a=e.event,r=t.event_id===a.event_type+"-"+a.id;if(a.event_type===ee.b.CHECKPOINT)return c.createElement(Te,{authToken:e.authToken,disabled:r,checkpoint:a});var i=function(e){if(e.event_type===ee.b.CHECKPOINT)return"toll";if(e.event_type===ee.b.BATCH_IMPORT)return{plaid:"grid_on",wave:"waves"}[e.origin];if(e.event_type===ee.b.STATEMENT_UPLOAD)return"cloud_upload";throw new Error("not possible")}(a),l=function(e){return e.event_type===ee.b.CHECKPOINT?"plus_one":null}(a);return c.createElement(be.a,{selected:r,disabled:r,button:!0,onClick:function(e){n.ListTransactions({start:0,end:40,event_id:a.event_type+"-"+a.id},"replace",function(e){return Object(Z.c)(ee.c.TransactionList,{event_id:a.event_type+"-"+a.id})})}},c.createElement(H.a,null,c.createElement(M.a,{title:a.event_type},c.createElement(k.a,{color:"primary"},i))),c.createElement(W.a,null,c.createElement(G.a,null,""+new Date(a.created_ts).toLocaleDateString()),c.createElement(G.a,{color:"textSecondary"},function(e){if(e.event_type===ee.b.CHECKPOINT){var t=e;return t.signed_ts?"balance: "+t.signed_balance+"  Signed at "+new Date(t.signed_ts).toLocaleDateString():"Not Signed"}if(e.event_type===ee.b.BATCH_IMPORT){var n=e;return n.origin+": "+n.start_date+" TO "+n.end_date}if(e.event_type===ee.b.STATEMENT_UPLOAD){var a=e;return a.source+": "+a.first_date+" TO "+a.last_date}throw new Error("not possible")}(a))),l?c.createElement(ye.a,null,c.createElement(o.a,null,c.createElement(k.a,null,l))):null)},Te=function(e){var t=e.authToken,n=e.checkpoint,a=e.disabled,r=c.useContext(I.a),i=n.signed_ts?"balance: "+n.signed_balance+"  Signed at "+new Date(n.signed_ts).toLocaleDateString():"Not Signed";return c.createElement(be.a,{selected:a,disabled:a,button:!0,onClick:function(e){r.ListTransactions({start:0,end:40,event_id:n.event_type+"-"+n.id},"replace",function(e){return Object(Z.c)(ee.c.TransactionList,{event_id:n.event_type+"-"+n.id})})}},c.createElement(H.a,null,c.createElement(M.a,{title:n.event_type},n.signed_ts?c.createElement(k.a,{color:"primary"},"toll"):c.createElement(k.a,{style:{color:"green"}},"fiber_new"))),c.createElement(W.a,null,c.createElement(G.a,null,""+new Date(n.created_ts).toLocaleDateString()),c.createElement(G.a,{color:"textSecondary"},i)),c.createElement(ye.a,null,c.createElement(ve.a,{color:"secondary",variant:"contained",size:"small","aria-label":"Small outlined button group"},n.signed_ts?null:c.createElement(o.a,{size:"small",color:"secondary",onClick:function(){return r.SignCheckPoint({id:n.id},"merge-append")}},c.createElement(k.a,null,"plus_one")),c.createElement(o.a,{size:"small",color:"secondary",disabled:!t,onClick:function(){window.open(Ce.a+"/export-checkpoint/"+t+"/"+n.id+"/","_blank")}},c.createElement(k.a,null,"cloud_download")))))},Se=Object(L.a)(function(e){return{events:e.events,authToken:Object(i.a)(e)}})(function(e){var t=c.useContext(I.a);return c.useEffect(function(){t.ListEvents({},"replace")},[]),c.createElement("div",null,c.createElement(he.a,null,e.events.map(function(t,n){return c.createElement(_e,{authToken:e.authToken,event:t,key:n})})))});n.d(t,"a",function(){return ke});var ke=Object(L.a)(function(e){return{transactions:Object(i.c)(e),selectableCategories:Object(i.b)(e)}})(c.memo(function(e){console.log("rerender list");var t=c.useState(!0),n=t[0],a=t[1],i=c.useState(null),l=i[0],u=i[1],s=c.useState(null),d=s[0],m=s[1],p=function(){var t=e.transactions.length,n=t+40;e.butler.ListTransactions({start:t,end:n},"merge-append")};c.useEffect(function(){e.selectableCategories.length||(e.butler.ListCategories({},"replace"),p())});return c.createElement("div",{style:{maxWidth:"100%"}},c.createElement(ae,{toggleTimeline:a,showForm:function(e){u(e)}}),c.createElement("div",{style:{height:window.innerHeight-70,overflow:"scroll"}},c.createElement(r.a,{container:!0},n?c.createElement(r.a,{item:!0,sm:3},c.createElement(Se,null)):null,c.createElement(r.a,{item:!0,sm:n?9:12},c.createElement("div",{style:{marginBottom:"20px"}},"transaction"===l?c.createElement(R,{selectableCategories:e.selectableCategories,onClose:function(){return u(null)}}):null,"statement"===l?c.createElement(S,{onClose:function(){return u(null)}}):null,"plaid"===l?c.createElement(E,{origin:"plaid"}):null,"wave"===l?c.createElement(E,{origin:"wave"}):null),e.transactions.map(function(e){return c.createElement(ge,{expanded:d===e.id,key:e.id,transaction:e,onToggleExpansion:function(t,n){return m(e.id)}})}),c.createElement(o.a,{fullWidth:!0,size:"large",color:"secondary",onClick:p},"(",e.transactions.length,") Click to Load More ...")))))},function(e,t){return!(e.selectableCategories.length!==t.selectableCategories.length||!a.isEqual(e.transactions,t.transactions))}))},177:function(e,t,n){"use strict";var a=n(0),r=n(581),o=n(613),c=n(536),i=n(257),l=n(579),u=n(580),s=n(537),d=n(584),m=n(259),p=n(585),f=n(538),E=n(582),g=n(583),h=n(541),b=n(256),y=n(81),v=["attach_money","beach_access","cake","compare_arrows","free_breakfast","gavel","home","local_activity","local_bar","local_car_wash","local_gas_station","local_grocery_store","local_hospital","local_parking","local_taxi","motorcycle","movie","not_interested","perm_scan_wifi","phone_iphone","power","help","restaurant","rowing","school","settings_input_component","settings_input_hdmi","shopping_basket","subway","theaters","pets"],C=function(e){var t=e.initialValue,n=e.onChange;return a.createElement(h.a,{onChange:n,value:t},v.map(function(e){return a.createElement(b.a,{key:e,value:e},a.createElement(l.a,null,a.createElement(u.a,{color:"primary"},e)),a.createElement(y.a,{style:{float:"right"}},e))}))},_=Object(r.a)(function(e){return Object(o.a)({node:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper}})}),T=function(e){var t=e.node,n=e.level,r=void 0===n?0:n,o=e.onSelectIcon,m=e.onSaveNode,p=_(),f=a.useState(!0),h=f[0],b=f[1];return a.createElement(c.a,{component:"nav",className:p.node},a.createElement(i.a,{button:!0,onClick:function(){b(!h)},style:{paddingLeft:32*r+"px"}},a.createElement(l.a,null,a.createElement(u.a,{color:"secondary"},t.mui_icon_id)),a.createElement(s.a,{primary:t.name}),h?a.createElement(E.a,null):a.createElement(g.a,null)),a.createElement(d.a,{in:h,timeout:"auto",unmountOnExit:!0},a.createElement(c.a,{component:"div",disablePadding:!0},t.children.map(function(e){return e.children.length?a.createElement(T,{onSelectIcon:o,onSaveNode:m,key:e.id,node:e,level:r+1}):a.createElement(S,{onSelectIcon:o,onSaveNode:m,key:e.id,node:e,level:r+1})}))))},S=function(e){var t=e.node,n=e.level,r=e.onSaveNode,o=e.onSelectIcon,c=a.useState(!1),l=c[0],d=c[1],E=a.useState(!1),g=E[0],h=E[1],b=a.useState(t.name),y=b[0],v=b[1],_=a.useState(t.mui_icon_id),T=_[0],S=_[1];return a.createElement(a.Fragment,null,a.createElement(i.a,{key:t.id,dense:!0,button:!0,role:void 0,style:{paddingLeft:32*(n+1)+"px"}},l?a.createElement(m.a,{autoFocus:!0,value:y,onChange:function(e){return v(e.target.value)},onBlur:function(){d(!1),r(t.id,y)}}):a.createElement(a.Fragment,null,g?a.createElement(C,{onChange:function(e,n){o(t.id,e.target.value),S(e.target.value),h(!1)},initialValue:T}):a.createElement(s.a,{onClick:function(){return d(!0)},primary:y}),a.createElement(p.a,null,a.createElement(f.a,{onClick:function(){return h(!0)},edge:"end"},a.createElement(u.a,{color:"primary"},T))))))},k=n(15);n.d(t,"a",function(){return x});var x=function(e){var t=a.useContext(k.a),n=a.useState(null),r=n[0],o=n[1];return a.useEffect(function(){r||t.TreefyCategories({},"replace",function(e){o(e.root)})}),r?a.createElement(T,{onSaveNode:function(e,n){return t.UpdateCategory({id:e,name:n},"do-nothing")},onSelectIcon:function(e,n){return t.UpdateCategory({id:e,mui_icon_id:n},"do-nothing")},node:r}):a.createElement("div",null)}},22:function(e,t,n){"use strict";n.d(t,"b",function(){return c}),n.d(t,"c",function(){return i}),n.d(t,"d",function(){return l}),n.d(t,"e",function(){return u}),n.d(t,"a",function(){return d});var a=n(25),r=n(20),o=n(34);function c(e){return new Date(e).toLocaleDateString("en-US",{month:"short",day:"numeric",timeZone:"UTC"})}var i=function(e){return e.getFullYear()+"-"+(e.getMonth()<9?"0"+(e.getMonth()+1):e.getMonth()+1)+"-"+(e.getDate()<10?"0"+e.getDate():e.getDate())};function l(){var e=new Date;return e.getFullYear()+"-"+(e.getMonth()<9?"0"+(e.getMonth()+1):e.getMonth()+1)+"-"+(e.getDate()<10?"0"+e.getDate():e.getDate())}var u=function(e,t,n){return t.reduce(function(t,a){var r=e.findIndex(function(e){return e.id===a.id});return r>=0?t.slice(0,r).concat([a],t.slice(r+1,t.length)):"append"===n?t.concat([a]):[a].concat(t)},e.slice())},s=function(e){return{butler:Object(r.bindActionCreators)(o.a,e)}},d=function(e){return Object(a.b)(e,s)}},238:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return S});var a=n(21),r=n(536),o=n(257),c=n(537),i=n(92),l=n(20),u=n(0),s=n(252),d=n(25),m=n(15),p=n(177),f=n(10),E=n(16),g=n(241),h=n(173),b=n(47),y=n(176),v=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a.b(t,e),t.prototype.render=function(){return u.createElement("div",{style:{maxWidth:"100%",flex:8}},u.createElement(m.b.Provider,{value:this.props.state},u.createElement(m.a.Provider,{value:this.props.butler},u.createElement(m.c.Provider,{value:this.props.urlState},u.createElement(T,{isAuthenticated:this.props.isAuthenticated})))))},t}(u.Component),C=Object(d.b)(function(e,t){return{isAuthenticated:!(!e.authToken&&!sessionStorage.getItem("authToken")),urlState:Object(b.d)(),state:e}},function(e){return{butler:Object(l.bindActionCreators)(f.a,e)}})(v),_=function(){var e={TransactionList:y.a,TransactionChart:h.a,CategoryPage:p.a};return u.createElement(r.a,null,Object.keys(e).map(function(e,t){return u.createElement(o.a,{key:t,button:!0,onClick:function(){return Object(E.c)(e)}},u.createElement(c.a,{primary:e}))}))},T=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a.b(t,e),t.prototype.render=function(){if(Object(E.a)()===f.c.LoginPage)return u.createElement(g.a,null);if(!this.props.isAuthenticated)return console.warn("not authenticated!!!"),Object(E.c)(f.c.LoginPage),u.createElement("div",null);if(Object(E.a)()===f.c.Root)return u.createElement(_,null);if(Object(E.a)()===f.c.TransactionList)return u.createElement(y.a,null);if(Object(E.a)()===f.c.TransactionChart)return u.createElement(h.a,null);if(Object(E.a)()===f.c.CategoryPage)return u.createElement(p.a,null);throw new Error("Invalid paths: "+Object(E.a)())},t}(u.Component),S=Object(s.hot)(e)(function(){return u.createElement(i.c,null,u.createElement(i.a,{path:"/",component:C}))})}).call(this,n(181)(e))},241:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(258),r=n(259),o=n(0),c=n(16),i=n(10),l=n(15),u=function(e){var t=o.useContext(l.a),n=o.useState(""),u=n[0],s=n[1],d=o.useState(""),m=d[0],p=d[1],f=function(){t.AuthenticateUser({username:u,password:m},"replace",function(e){sessionStorage.setItem("authToken",e.authToken),Object(c.c)(i.c.Root)})};return o.createElement("div",{style:{height:window.innerHeight+"px",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}},o.createElement(r.a,{label:"Username",onChange:function(e){return s(e.target.value)}}),o.createElement("br",null),o.createElement(r.a,{onChange:function(e){return p(e.target.value)},type:"password",label:"Password",onKeyPress:function(e){13==e.charCode&&f()}}),o.createElement("br",null),o.createElement(a.a,{variant:"contained",color:"primary",onClick:function(){return f()}},"Login"))}},34:function(e,t,n){"use strict";var a,r,o;n.d(t,"b",function(){return a}),n.d(t,"d",function(){return r}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return c}),function(e){e.ListTransactions="ListTransactions",e.AuthenticateUser="AuthenticateUser",e.ListCategories="ListCategories",e.TreefyCategories="TreefyCategories",e.UpdateCategory="UpdateCategory",e.ListEvents="ListEvents",e.GetUserBalance="GetUserBalance",e.UpdateTransaction="UpdateTransaction",e.GetIncomeExpenseReport="GetIncomeExpenseReport",e.GetExpenseReport="GetExpenseReport",e.UploadStatement="UploadStatement",e.ImportFromPlaid="ImportFromPlaid",e.ImportFromWave="ImportFromWave",e.SignCheckPoint="SignCheckPoint",e.CreateTransaction="CreateTransaction",e.ArchiveTransaction="ArchiveTransaction"}(a||(a={})),function(e){e.CHECKPOINT="CHECKPOINT",e.STATEMENT_UPLOAD="STATEMENT_UPLOAD",e.BATCH_IMPORT="BATCH_IMPORT"}(r||(r={})),function(e){e.PC_MASTER="PC_MASTER",e.SCOTIA_MASTER="SCOTIA_MASTER",e.VISA="VISA",e.CHEQUE="CHEQUE"}(o||(o={}));var c={ListTransactions:function(e,t,n){return function(r){return r({type:a.ListTransactions,route:a.ListTransactions,data:e,updateType:t,successCallback:n})}},AuthenticateUser:function(e,t,n){return function(r){return r({type:a.AuthenticateUser,route:a.AuthenticateUser,data:e,updateType:t,successCallback:n})}},ListCategories:function(e,t,n){return function(r){return r({type:a.ListCategories,route:a.ListCategories,data:e,updateType:t,successCallback:n})}},TreefyCategories:function(e,t,n){return function(r){return r({type:a.TreefyCategories,route:a.TreefyCategories,data:e,updateType:t,successCallback:n})}},UpdateCategory:function(e,t,n){return function(r){return r({type:a.UpdateCategory,route:a.UpdateCategory,data:e,updateType:t,successCallback:n})}},ListEvents:function(e,t,n){return function(r){return r({type:a.ListEvents,route:a.ListEvents,data:e,updateType:t,successCallback:n})}},GetUserBalance:function(e,t,n){return function(r){return r({type:a.GetUserBalance,route:a.GetUserBalance,data:e,updateType:t,successCallback:n})}},UpdateTransaction:function(e,t,n){return function(r){return r({type:a.UpdateTransaction,route:a.UpdateTransaction,data:e,updateType:t,successCallback:n})}},GetIncomeExpenseReport:function(e,t,n){return function(r){return r({type:a.GetIncomeExpenseReport,route:a.GetIncomeExpenseReport,data:e,updateType:t,successCallback:n})}},GetExpenseReport:function(e,t,n){return function(r){return r({type:a.GetExpenseReport,route:a.GetExpenseReport,data:e,updateType:t,successCallback:n})}},UploadStatement:function(e,t,n){return function(r){return r({type:a.UploadStatement,route:a.UploadStatement,data:e,updateType:t,successCallback:n})}},ImportFromPlaid:function(e,t,n){return function(r){return r({type:a.ImportFromPlaid,route:a.ImportFromPlaid,data:e,updateType:t,successCallback:n})}},ImportFromWave:function(e,t,n){return function(r){return r({type:a.ImportFromWave,route:a.ImportFromWave,data:e,updateType:t,successCallback:n})}},SignCheckPoint:function(e,t,n){return function(r){return r({type:a.SignCheckPoint,route:a.SignCheckPoint,data:e,updateType:t,successCallback:n})}},CreateTransaction:function(e,t,n){return function(r){return r({type:a.CreateTransaction,route:a.CreateTransaction,data:e,updateType:t,successCallback:n})}},ArchiveTransaction:function(e,t,n){return function(r){return r({type:a.ArchiveTransaction,route:a.ArchiveTransaction,data:e,updateType:t,successCallback:n})}}}},47:function(e,t,n){"use strict";n.d(t,"b",function(){return c}),n.d(t,"c",function(){return i}),n.d(t,"d",function(){return l}),n.d(t,"a",function(){return u});var a=n(245),r=n.n(a),o=n(16);function c(e){return e.categories.filter(function(e){return e.is_selectable})}function i(e){return e.transactions||[]}function l(){var e=r.a.parse(o.b.location.search.split("?")[1]);return e&&e.urlState?JSON.parse(e.urlState):{}}var u=function(e){return e.authToken||sessionStorage.getItem("authToken")||""}},534:function(e,t,n){"use strict";n.r(t);var a,r,o=n(0),c=n(9),i=n(25),l=n(92),u=n(16),s=(n(280),n(20)),d=n(236),m=n.n(d),p=n(237),f=n(110),E=n(10),g=n(34),h=function(e){return function(t){return function(n){return n&&g.b[n.type]&&Object(f.b)({endpoint:n.route,jsonBody:n.data,authToken:sessionStorage.getItem("authToken")||e.getState().authToken||""}).then(function(t){t.ok?t.json().then(function(t){e.dispatch({type:"BUTLER_ANSWERED",updateType:n.updateType,response:t}),n.successCallback&&n.successCallback(t)}):401===t.status&&(sessionStorage.removeItem("jwt"),Object(u.c)(E.c.LoginPage))}),t(n)}}},b=n(111),y=n(238),v=(r=Object(s.applyMiddleware)(p.a,h,m()()),Object(s.createStore)(b.a,a,r));c.render(o.createElement(i.a,{store:v},o.createElement(l.b,{history:u.b},o.createElement(y.a,null))),document.getElementById("root"))}},[[534,1,2]]]);