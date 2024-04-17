var addEvaluationButton = document.getElementById('addEvaluationButton');
var EvaluationcancelButton = document.getElementById("EvaluationcancelButton");

var ModifyEvaluationcancelButton = document.getElementById("ModifyEvaluationcancelButton")
/**增加 */
var hide = true;
addEvaluationButton.onclick = function () {
    if(hide) {
        document.getElementById("EvaluationForm").style.display = "block";
        hide = false;
    }
}
EvaluationcancelButton.onclick = function() {
    if(hide != true) {
        document.getElementById("EvaluationForm").style.display = "none";
        hide = true;
    }
}

/**存放编号的数组 */
var EvaluationIdDatas = [];
/**添加公司基本信息数据操作 */
document.getElementById("EvaluationsubmitButton").onclick = function() {
    var tbale = document.getElementById('Evaluation');
    var EvaluationId = document.getElementById('EvaluationId').value;
    var EvaluationMemberId = document.getElementById('EvaluationMemberId').value;
    var EvaluationDate = document.getElementById('EvaluationDate').value;
    var EvaluationGrade = document.getElementById('EvaluationGrade').value;
    var EvaluationNote = document.getElementById('EvaluationNote').value;
    var tr = document.createElement("tr");
    tbale.appendChild(tr);

    /**检查有无空项 */
    if(EvaluationId == "" || EvaluationMemberId == "" || EvaluationDate == "" || EvaluationGrade == ""){
        alert("内容有空项，请检查")
        return 0;
    }
    /**检查有无重复编号 */
    for(var i = 0; i < EvaluationIdDatas.length; i++){
        if(EvaluationId == EvaluationIdDatas[i]){
            alert("请勿重复输入");
            return 0;
        }
    }

    var EvaluationResult 
    if(parseInt(EvaluationGrade) > 100 || parseInt(EvaluationGrade) < 0){
        alert("请输入正确的考评结果")
    }
    else if(parseInt(EvaluationGrade) >= 85){
        EvaluationResult = "A";
    }
    else if(parseInt(EvaluationGrade) >= 70){
        EvaluationResult = "B";
    }
    else if(parseInt(EvaluationGrade) >= 60){
        EvaluationResult = "C";
    }
    else{
        EvaluationResult = "D";
    }




    console.log(parseInt(EvaluationGrade),typeof(EvaluationGrade));
    var Evaluation1 = document.createElement('td')
    Evaluation1.className = "Member1"
    Evaluation1.appendChild(document.createTextNode(EvaluationId))
    var Evaluation2 = document.createElement('td')
    Evaluation2.className = "Member2"
    Evaluation2.appendChild(document.createTextNode(EvaluationMemberId))
    var Evaluation3 = document.createElement('td')
    Evaluation3.className = "Member3"
    Evaluation3.appendChild(document.createTextNode(EvaluationDate))
    var Evaluation4 = document.createElement('td')
    Evaluation4.className = "Member4"
    Evaluation4.appendChild(document.createTextNode(EvaluationGrade))
    var Evaluation5 = document.createElement('td')
    Evaluation5.className = "Member5"
    Evaluation5.appendChild(document.createTextNode(EvaluationResult))
    var Evaluation6 = document.createElement('td')
    Evaluation6.className = "Member6"
    Evaluation6.appendChild(document.createTextNode(EvaluationNote))

    var operation = document.createElement('td');
    operation.className = "operation"
    var p = document.createElement('p')
    
    /**删除操作 */
    var deleteCompany = document.createElement('a')
    deleteCompany.className = "delete"
    deleteCompany.href = "javascript:;"
    deleteCompany.innerText = "删除"
    deleteCompany.addEventListener('click',function(){
        var deleteEvaluationIdId = this.parentNode.parentNode.firstChild.innerText
        document.getElementById("Evaluation").removeChild(this.parentNode.parentNode)
        /**删除数据 */
        for(var i = 0; i < EvaluationIdDatas.length; i++){
            if(EvaluationIdDatas[i] == deleteEvaluationIdId){
                EvaluationIdDatas.splice(i , 1)
            }
        }
        deleteEvaluationIdId = null
    })

    /**修改数据操作 */
    var modifyCompany = document.createElement('a')
    modifyCompany.className = "modify"
    modifyCompany.href = "javascript:;"
    modifyCompany.innerText = "修改"
    modifyCompany.addEventListener('click', function modify(){
        var values = this.parentNode.parentNode.querySelectorAll('td');
        console.log(values[1].innerText);
        if(hide) {
            document.getElementById("modifyEvaluationForm").style.display = "block";
            hide = false
            document.getElementById("modifyEvaluationId").value = values[0].innerText;
            document.getElementById("modifyEvaluationMemberId").value = values[1].innerText;
            document.getElementById("modifyEvaluationDate").value = values[2].innerText;
            document.getElementById("modifyEvaluationGrade").value = values[3].innerText;
            document.getElementById("modifyEvaluationNote").value = values[5].innerText;
        }
        document.getElementById("ModifyEvaluationsubmitButton").onclick = function(){
            document.getElementById("modifyEvaluationForm").style.display = "none";
            hide = true

            /**判断编号是否存在 */
            for(var i = 0; i < EvaluationIdDatas.length; i++){
                if(document.getElementById("modifyEvaluationId").value == EvaluationIdDatas[i]){
                    if(document.getElementById("modifyEvaluationId").value == values[0].innerText){
                        continue;
                    }
                    else{
                        alert("该编号已存在");
                        return 0;
                    }
                }
            }
            /**写入数据 */
            values[0].innerText = document.getElementById("modifyEvaluationId").value
            values[1].innerText = document.getElementById("modifyEvaluationMemberId").value
            values[2].innerText = document.getElementById("modifyEvaluationDate").value
            values[3].innerText = document.getElementById("modifyEvaluationGrade").value
                if(parseInt(values[3].innerText) > 100 || parseInt(values[3].innerText) < 0){
                    alert("请输入正确的考评结果")
                }
                else if(parseInt(values[3].innerText) >= 85){
                    values[4].innerText = "A";
                }
                else if(parseInt(values[3].innerText) >= 70){
                    values[4].innerText = "B";
                }
                else if(parseInt(values[3].innerText) >= 60){
                    values[4].innerText = "C";
                }
                else{
                    values[4].innerText = "D";
                }
            values[5].innerText = document.getElementById("modifyEvaluationNote").value
               
        }

        ModifyEvaluationcancelButton.onclick = function(){
            if(hide != true){
                document.getElementById("ModifyEvaluationcancelButton").style.display = "none";
                hide = true
            }
        }
        hide = false;
    })


    tr.appendChild(Evaluation1)
    tr.appendChild(Evaluation2)
    tr.appendChild(Evaluation3)
    tr.appendChild(Evaluation4)
    tr.appendChild(Evaluation5)
    tr.appendChild(Evaluation6)
    operation.appendChild(deleteCompany)
    operation.appendChild(p)
    operation.appendChild(modifyCompany)
    tr.appendChild(operation)

    EvaluationIdDatas.push(EvaluationId);

    var EvaluationId = document.getElementById('EvaluationId').value = null;
    var EvaluationMemberId = document.getElementById('EvaluationMemberId').value = null
    var EvaluationDate = document.getElementById('EvaluationDate').value = null;
    var EvaluationGrade = document.getElementById('EvaluationGrade').value = null;
    var EvaluationNote = document.getElementById('EvaluationNote').value = null

    document.getElementById("EvaluationForm").style.display = "none";
    hide = true;

}

