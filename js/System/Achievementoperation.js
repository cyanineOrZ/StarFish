var addMemberAchievementButton = document.getElementById('addMemberAchievementButton');
var AchievementcancelButton = document.getElementById("AchievementcancelButton");

var ModifyAchievementcancelButton = document.getElementById("ModifyAchievementcancelButton")
/**增加 */
var hide = true;
addMemberAchievementButton.onclick = function () {
    if(hide) {
        document.getElementById("AchievementForm").style.display = "block";
        hide = false;
    }
}
AchievementcancelButton.onclick = function() {
    if(hide != true) {
        document.getElementById("AchievementForm").style.display = "none";
        hide = true;
    }
}

/**存放公司编号的数组 */
var AchievementDatas = [];
/**添加公司基本信息数据操作 */
document.getElementById("AchievementsubmitButton").onclick = function() {
    var tbale = document.getElementById('Achievement');
    var AchievementId = document.getElementById('AchievementId').value;
    var AchievementMemberId = document.getElementById('AchievementMemberId').value;
    var AchievementContent = document.getElementById('AchievementContent').value;
    var AchievementNote = document.getElementById('AchievementNote').value;
    var tr = document.createElement("tr");
    tbale.appendChild(tr);

    /**检查有无空项 */
    if(AchievementId == "" || AchievementMemberId == "" || AchievementContent == "" || AchievementNote == ""){
        alert("内容有空项，请检查")
        return 0;
    }
    /**检查有无重复编号 */
    for(var i = 0; i < AchievementDatas.length; i++){
        if(AchievementId == AchievementDatas[i]){
            alert("请勿重复输入");
            return 0;
        }
    }

    var Achievement1 = document.createElement('td')
    Achievement1.className = "MemberRewards1"
    Achievement1.appendChild(document.createTextNode(AchievementId))
    var Achievement2 = document.createElement('td')
    Achievement2.className = "MemberRewards2"
    Achievement2.appendChild(document.createTextNode(AchievementMemberId))
    var Achievement3 = document.createElement('td')
    Achievement3.className = "MemberRewards3"
    Achievement3.appendChild(document.createTextNode(AchievementContent))
    var Achievement4 = document.createElement('td')
    Achievement4.className = "MemberRewards4"
    Achievement4.appendChild(document.createTextNode(AchievementNote))

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
        var deleteAchievementId = this.parentNode.parentNode.firstChild.innerText
        document.getElementById("Achievement").removeChild(this.parentNode.parentNode)
        /**删除数据 */
        for(var i = 0; i < AchievementDatas.length; i++){
            if(AchievementDatas[i] == deleteTrainId){
                AchievementDatas.splice(i , 1)
            }
        }
        deleteAchievementId = null
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
            document.getElementById("modifyAchievementForm").style.display = "block";
            hide = false
            document.getElementById("modifyAchievementId").value = values[0].innerText;
            document.getElementById("modifyAchievementMemberId").value = values[1].innerText;
            document.getElementById("modifyAchievementContent").value = values[2].innerText;
            document.getElementById("modifyAchievementNote").value = values[3].innerText;
        }
        document.getElementById("ModifyAchievementsubmitButton").onclick = function(){
            document.getElementById("modifyAchievementForm").style.display = "none";
            hide = true

            /**判断编号是否存在 */
            for(var i = 0; i < AchievementDatas.length; i++){
                if(document.getElementById("modifyAchievementId").value == AchievementDatas[i]){
                    if(document.getElementById("modifyAchievementId").value == values[0].innerText){
                        continue;
                    }
                    else{
                        alert("该编号已存在");
                        return 0;
                    }
                }
            }
            /**写入数据 */
            values[0].innerText = document.getElementById("modifyAchievementId").value
            values[1].innerText = document.getElementById("modifyAchievementMemberId").value
            values[2].innerText = document.getElementById("modifyAchievementContent").value
            values[3].innerText = document.getElementById("modifyAchievementNote").value
        }

        ModifyAchievementcancelButton.onclick = function(){
            if(hide != true){
                document.getElementById("modifyAchievementForm").style.display = "none";
                hide = true
            }
        }
        hide = false;
    })


    tr.appendChild(Achievement1)
    tr.appendChild(Achievement2)
    tr.appendChild(Achievement3)
    tr.appendChild(Achievement4)
    operation.appendChild(deleteCompany)
    operation.appendChild(p)
    operation.appendChild(modifyCompany)
    tr.appendChild(operation)

    AchievementDatas.push(AchievementId);

    var AchievementId = document.getElementById('AchievementId').value = null;
    var AchievementMemberId = document.getElementById('AchievementMemberId').value = null
    var AchievementContent = document.getElementById('AchievementContent').value = null;
    var AchievementNote = document.getElementById('AchievementNote').value = null;

    document.getElementById("AchievementForm").style.display = "none";
    hide = true;

}