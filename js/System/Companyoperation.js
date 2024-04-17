var addCompanyButton = document.getElementById('addCompanyButton');
var CompanycancelButton = document.getElementById("CompanycancelButton");

var ModifyCompanycancelButton = document.getElementById("ModifyCompanycancelButton")
/**增加 */
var hide = true;
addCompanyButton.onclick = function () {
    if(hide) {
        document.getElementById("CompanyForm").style.display = "block";
        hide = false;
    }
}
CompanycancelButton.onclick = function() {
    if(hide != true) {
        document.getElementById("CompanyForm").style.display = "none";
        hide = true;
    }
}

/**存放公司编号的数组 */
var CompanyDatas = [];
/**添加公司基本信息数据操作 */
document.getElementById("CompanysubmitButton").onclick = function() {
    var tbale = document.getElementById('Company');
    var CompanyId = document.getElementById('CompanyId').value;
    var CompanyName = document.getElementById('CompanyName').value;
    var CompanyEstablisherTime = document.getElementById('CompanyEstablisherTime').value;
    var CompanyMenberNumber = document.getElementById('CompanyMenberNumber').value;
    var tr = document.createElement("tr");
    tbale.appendChild(tr);

    /**检查有无空项 */
    if(CompanyId == "" || CompanyName == "" || CompanyEstablisherTime == ""){
        alert("内容有空项，请检查")
        return 0;
    }
    /**检查有无重复编号 */
    for(var i = 0; i < CompanyDatas.length; i++){
        if(CompanyId == CompanyDatas[i]){
            alert("请勿重复输入");
            return 0;
        }
    }

    var Company1 = document.createElement('td')
    Company1.className = "Company1"
    Company1.appendChild(document.createTextNode(CompanyId))
    var Company2 = document.createElement('td')
    Company2.className = "Company1"
    Company2.appendChild(document.createTextNode(CompanyName))
    var Company3 = document.createElement('td')
    Company3.className = "Company1"
    Company3.appendChild(document.createTextNode(CompanyEstablisherTime))
    var Company4 = document.createElement('td')
    Company4.className = "Company1"
    Company4.appendChild(document.createTextNode(CompanyMenberNumber))
    var operation = document.createElement('td');
    operation.className = "operation"
    var p = document.createElement('p')
    
    /**删除操作 */
    var deleteCompany = document.createElement('a')
    deleteCompany.className = "delete"
    deleteCompany.href = "javascript:;"
    deleteCompany.innerText = "删除"
    deleteCompany.addEventListener('click',function(){
        console.log("123");
        var deleteCompanyId = this.parentNode.parentNode.firstChild.innerText
        document.getElementById("Company").removeChild(this.parentNode.parentNode)
        /**删除数据 */
        for(var i = 0; i < CompanyDatas.length; i++){
            if(CompanyDatas[i] == deleteCompanyId){
                CompanyDatas.splice(i , 1)
            }
        }
        deleteCompany = null
    })

    /**修改数据操作 */
    var modifyCompany = document.createElement('a')
    modifyCompany.className = "modify"
    modifyCompany.href = "javascript:;"
    modifyCompany.innerText = "修改"
    modifyCompany.addEventListener('click', function modify(){
        var values = this.parentNode.parentNode.querySelectorAll('td');
        if(hide) {
            document.getElementById("modifyCompanyForm").style.display = "block";
            hide = false
            document.getElementById("modifyCompanyId").value = values[0].innerText;
            document.getElementById("modifyCompanyName").value = values[1].innerText;
            document.getElementById("modifyCompanyEstablisherTime").value = values[2].innerText;
            document.getElementById("modifyCompanyMenberNumber").value = values[3].innerText;
        }
        document.getElementById("ModifyCompanysubmitButton").onclick = function(){
            document.getElementById("modifyCompanyForm").style.display = "none";
            hide = true

            /**判断编号是否存在 */
            for(var i = 0; i < CompanyDatas.length; i++){
                if(document.getElementById("modifyCompanyId").value == CompanyDatas[i]){
                    if(document.getElementById("modifyCompanyId").value == values[0].innerText){
                        continue;
                    }
                    else{
                        alert("该编号已存在");
                        return 0;
                    }
                }
            }
            /**写入数据 */
            values[0].innerText = document.getElementById("modifyCompanyId").value
            values[1].innerText = document.getElementById("modifyCompanyName").value
            values[2].innerText = document.getElementById("modifyCompanyEstablisherTime").value
            values[3].innerText = document.getElementById("modifyCompanyMenberNumber").value
               
        }

        ModifyCompanycancelButton.onclick = function(){
            if(hide != true){
                document.getElementById("modifyCompanyForm").style.display = "none";
                hide = true
            }
        }
        hide = false;
    })


    tr.appendChild(Company1)
    tr.appendChild(Company2)
    tr.appendChild(Company3)
    tr.appendChild(Company4)
    operation.appendChild(deleteCompany)
    operation.appendChild(p)
    operation.appendChild(modifyCompany)
    tr.appendChild(operation)

    CompanyDatas.push(CompanyId);

    var CompanyId = document.getElementById('CompanyId').value = null;
    var CompanyName = document.getElementById('CompanyName').value = null
    var CompanyEstablisherTime = document.getElementById('CompanyEstablisherTime').value = null;
    var CompanyMenberNumber = document.getElementById('CompanyMenberNumber').value = null;

    document.getElementById("CompanyForm").style.display = "none";
    hide = true;

}


// var a = document.getElementsByClassName("delete");
// for(var i = 0; i < a,length; i++) {
//     a.onclick = function() {
//         document.getElementById("Company").removeChild(this.parentNode.parentNode)
//     }
// }
// /**删除 */
// var a = document.getElementById("Company").querySelectorAll( 'tr' > 'td' >'a')
// for(var i = 0; i < a.length; i++){
//     a[i].onclick = function deleteCompany() {
//         console.log(a.length);
//     }
// }

// //动态创建行
// function create() {
//     var tbody = document.getElementById('Company');
//         for(var i = 0; i < CompanyDatas.length; i++) {
//         var tr = document.createElement('tr');
//         tbody.appendChild(tr);
//         //动态创建每行的单元格
//             for(var j in CompanyDatas[i]) {
//                 var td = document.createElement('td');
//                 //将数据录入单元格
//                 td.innerHTML = CompanyDatas[i][j]; 
//                 tr.appendChild(td);
//             }
//             var td = document.createElement("td")
//             td.innerHTML = '<a href="javascript:;">删除</a>';
//             tr.appendChild(td)
//         }
// }


// /*公司基本信息对象*/
// var CompanyDatas = [
//     {
//         CompanyId: "null",
//         CompanyName: "StarFish",
//         CompanyEstablisherTime: "2022.9.15",
//         CompanyMenberNumber: "无",
//     }
// ];
// /*根据默认值创建表单 */
// create()

// /**添加对象 */
// function createElement(object) {
//     var tbody = document.getElementById('Company');
//     for(var i = object; i < CompanyDatas.length; i++) {
//         var tr = document.createElement('tr');
//         tr.id = "0" + i
//         tbody.appendChild(tr);
//         //动态创建每行的单元格
//             for(var j in CompanyDatas[i]) {
//                 var column = document.createElement('td');
//                 //将数据录入单元格
//                 column.innerHTML = CompanyDatas[i][j]; 
//                 tr.appendChild(column);
//             }
//         var td = document.createElement("td")
//         td.innerHTML = '<a href="javascript:;">删除</a>';
//         tr.appendChild(td)
    
// }
// document.getElementById("CompanysubmitButton").onclick =  function sumbit() {
//     var object = CompanyDatas.length;
//     var ComoanyId = document.getElementById("CompanyId").value;
//     var CompanyName = document.getElementById("CompanyName").value;
//     var CompanyEstablisherTime = document.getElementById("CompanyEstablisherTime").value;
//     var CompanyMenberNumber = document.getElementById("CompanyMenberNumber").value;
//     for(var j = 0; j < CompanyDatas.length; j++) {
//         if(CompanyDatas[j].CompanyId == ComoanyId){
//             alert("请勿重复输入");
//             document.getElementById("CompanyForm").style.display = "none";
//             hide = true;
//             return 0;
//         }
//         else if(ComoanyId == "" || CompanyName == "" || CompanyEstablisherTime == "" || CompanyMenberNumber == ""){
//             alert("内容有空，请检查")
//             document.getElementById("CompanyForm").style.display = "none";
//             hide = true;
//             return 0;
//         }
//     }
//     CompanyDatas[object] = {
//         CompanyId: ComoanyId,
//         CompanyName: CompanyName,
//         CompanyEstablisherTime: CompanyEstablisherTime,
//         CompanyMenberNumber: CompanyMenberNumber,
//     }
//     createElement(object)
//     document.getElementById("CompanyForm").style.display = "none";
//     hide = true;
// }
// }
// /**删除 */
// var a = document.getElementById("Company").querySelectorAll( 'tr' > 'td' >'a')
// for(var i = 0; i < a.length; i++){
//     a[i].onclick = function deleteCompany() {
//         console.log(a.length);
//     }
// }