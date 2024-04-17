var addMemberTrainButton = document.getElementById('addMemberTrainButton');
var TraincancelButton = document.getElementById("TraincancelButton");

var ModifyTraincancelButton = document.getElementById("ModifyTraincancelButton")
/**增加 */
var hide = true;
addMemberTrainButton.onclick = function () {
    if(hide) {
        document.getElementById("TrainForm").style.display = "block";
        hide = false;
    }
}
TraincancelButton.onclick = function() {
    if(hide != true) {
        document.getElementById("TrainForm").style.display = "none";
        hide = true;
    }
}

/**存放公司编号的数组 */
var TrainDatas = [];
/**添加公司基本信息数据操作 */
document.getElementById("TrainsubmitButton").onclick = function() {
    var tbale = document.getElementById('Train');
    var TrainId = document.getElementById('TrainId').value;
    var TrainMemberId = document.getElementById('TrainMemberId').value;
    var TrainDate = document.getElementById('TrainDate').value;
    var TrainContent = document.getElementById('TrainContent').value;
    var TrainNote = document.getElementById('TrainNote').value;
    var tr = document.createElement("tr");
    tbale.appendChild(tr);

    /**检查有无空项 */
    if(TrainId == "" || TrainMemberId == "" || TrainDate == "" || TrainContent == ""){
        alert("内容有空项，请检查")
        return 0;
    }
    /**检查有无重复编号 */
    for(var i = 0; i < TrainDatas.length; i++){
        if(TrainId == TrainDatas[i]){
            alert("请勿重复输入");
            return 0;
        }
    }

    var Train1 = document.createElement('td')
    Train1.className = "MemberRewards1"
    Train1.appendChild(document.createTextNode(TrainId))
    var Train2 = document.createElement('td')
    Train2.className = "MemberRewards2"
    Train2.appendChild(document.createTextNode(TrainMemberId))
    var Train3 = document.createElement('td')
    Train3.className = "MemberRewards3"
    Train3.appendChild(document.createTextNode(TrainDate))
    var Train4 = document.createElement('td')
    Train4.className = "MemberRewards4"
    Train4.appendChild(document.createTextNode(TrainContent))
    var Train5 = document.createElement('td')
    Train5.className = "MemberRewards5"
    Train5.appendChild(document.createTextNode(TrainNote))

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
        var deleteTrainId = this.parentNode.parentNode.firstChild.innerText
        document.getElementById("Train").removeChild(this.parentNode.parentNode)
        /**删除数据 */
        for(var i = 0; i < TrainDatas.length; i++){
            if(TrainDatas[i] == deleteTrainId){
                TrainDatas.splice(i , 1)
            }
        }
        deleteTrainId = null
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
            document.getElementById("modifyTrainForm").style.display = "block";
            hide = false
            document.getElementById("modifyTrainId").value = values[0].innerText;
            document.getElementById("modifyTrainMemberId").value = values[1].innerText;
            document.getElementById("modifyTrainDate").value = values[2].innerText;
            document.getElementById("modifyETrainContent").value = values[3].innerText;
            document.getElementById("modifyTrainNote").value = values[4].innerText;
        }
        document.getElementById("ModifyTrainsubmitButton").onclick = function(){
            document.getElementById("modifyTrainForm").style.display = "none";
            hide = true

            /**判断编号是否存在 */
            for(var i = 0; i < TrainDatas.length; i++){
                if(document.getElementById("modifyTrainId").value == TrainDatas[i]){
                    if(document.getElementById("modifyTrainId").value == values[0].innerText){
                        continue;
                    }
                    else{
                        alert("该编号已存在");
                        return 0;
                    }
                }
            }
            /**写入数据 */
            values[0].innerText = document.getElementById("modifyTrainId").value
            values[1].innerText = document.getElementById("modifyTrainMemberId").value
            values[2].innerText = document.getElementById("modifyTrainDate").value
            values[3].innerText = document.getElementById("modifyETrainContent").value
            values[4].innerText = document.getElementById("modifyTrainNote").value
               
        }

        ModifyTraincancelButton.onclick = function(){
            if(hide != true){
                document.getElementById("modifyTrainForm").style.display = "none";
                hide = true
            }
        }
        hide = false;
    })


    tr.appendChild(Train1)
    tr.appendChild(Train2)
    tr.appendChild(Train3)
    tr.appendChild(Train4)
    tr.appendChild(Train5)
    operation.appendChild(deleteCompany)
    operation.appendChild(p)
    operation.appendChild(modifyCompany)
    tr.appendChild(operation)

    TrainDatas.push(TrainId);

    var TrainId = document.getElementById('RewardsId').value = null;
    var TrainMemberId = document.getElementById('RewardsMemberId').value = null
    var TrainDate = document.getElementById('RewardsDate').value = null;
    var TrainContent = document.getElementById('RewardsReason').value = null;
    var TrainNote = document.getElementById('RewardsNote').value = null

    document.getElementById("TrainForm").style.display = "none";
    hide = true;

}