var addMemberRewardsButton = document.getElementById('addMemberRewardsButton');
var RewardscancelButton = document.getElementById("RewardscancelButton");

var ModifyRewardcancelButton = document.getElementById("ModifyRewardcancelButton")
/**增加 */
var hide = true;
addMemberRewardsButton.onclick = function () {
    if(hide) {
        document.getElementById("RewardsForm").style.display = "block";
        hide = false;
    }
}
RewardscancelButton.onclick = function() {
    if(hide != true) {
        document.getElementById("RewardsForm").style.display = "none";
        hide = true;
    }
}

/**存放公司编号的数组 */
var RewardsDatas = [];
/**添加公司基本信息数据操作 */
document.getElementById("RewardssubmitButton").onclick = function() {
    var tbale = document.getElementById('Rewards');
    var RewardsId = document.getElementById('RewardsId').value;
    var RewardsMemberId = document.getElementById('RewardsMemberId').value;
    var RewardsDate = document.getElementById('RewardsDate').value;
    var RewardsReason = document.getElementById('RewardsReason').value;
    var RewardsNote = document.getElementById('RewardsNote').value;
    var tr = document.createElement("tr");
    tbale.appendChild(tr);

    /**检查有无空项 */
    if(RewardsId == "" || RewardsMemberId == "" || RewardsDate == "" || RewardsReason == ""){
        alert("内容有空项，请检查")
        return 0;
    }
    /**检查有无重复编号 */
    for(var i = 0; i < RewardsDatas.length; i++){
        if(RewardsId == RewardsDatas[i]){
            alert("请勿重复输入");
            return 0;
        }
    }

    var Rewards1 = document.createElement('td')
    Rewards1.className = "MemberRewards1"
    Rewards1.appendChild(document.createTextNode(RewardsId))
    var Rewards2 = document.createElement('td')
    Rewards2.className = "MemberRewards2"
    Rewards2.appendChild(document.createTextNode(RewardsMemberId))
    var Rewards3 = document.createElement('td')
    Rewards3.className = "MemberRewards3"
    Rewards3.appendChild(document.createTextNode(RewardsDate))
    var Rewards4 = document.createElement('td')
    Rewards4.className = "MemberRewards4"
    Rewards4.appendChild(document.createTextNode(RewardsReason))
    var Rewards5 = document.createElement('td')
    Rewards5.className = "MemberRewards5"
    Rewards5.appendChild(document.createTextNode(RewardsNote))

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
        var deleteRewardsId = this.parentNode.parentNode.firstChild.innerText
        document.getElementById("Rewards").removeChild(this.parentNode.parentNode)
        /**删除数据 */
        for(var i = 0; i < RewardsDatas.length; i++){
            if(RewardsDatas[i] == deleteRewardsId){
                RewardsDatas.splice(i , 1)
            }
        }
        deleteMemberId = null
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
            document.getElementById("modifyRewardForm").style.display = "block";
            hide = false
            document.getElementById("modifyRewardId").value = values[0].innerText;
            document.getElementById("modifyRewardMemberId").value = values[1].innerText;
            document.getElementById("modifyRewardDate").value = values[2].innerText;
            document.getElementById("modifyRewardsReason").value = values[3].innerText;
            document.getElementById("modifyRewardsNote").value = values[4].innerText;
        }
        document.getElementById("ModifyRewardsubmitButton").onclick = function(){
            document.getElementById("modifyRewardForm").style.display = "none";
            hide = true

            /**判断编号是否存在 */
            for(var i = 0; i < RewardsDatas.length; i++){
                if(document.getElementById("modifyRewardId").value == RewardsDatas[i]){
                    if(document.getElementById("modifyRewardId").value == values[0].innerText){
                        continue;
                    }
                    else{
                        alert("该编号已存在");
                        return 0;
                    }
                }
            }
            /**写入数据 */
            values[0].innerText = document.getElementById("modifyRewardId").value
            values[1].innerText = document.getElementById("modifyRewardMemberId").value
            values[2].innerText = document.getElementById("modifyRewardDate").value
            values[3].innerText = document.getElementById("modifyRewardsReason").value
            values[4].innerText = document.getElementById("modifyRewardsNote").value
               
        }

        ModifyMembercancelButton.onclick = function(){
            if(hide != true){
                document.getElementById("modifyRewardForm").style.display = "none";
                hide = true
            }
        }
        hide = false;
    })


    tr.appendChild(Rewards1)
    tr.appendChild(Rewards2)
    tr.appendChild(Rewards3)
    tr.appendChild(Rewards4)
    tr.appendChild(Rewards5)
    operation.appendChild(deleteCompany)
    operation.appendChild(p)
    operation.appendChild(modifyCompany)
    tr.appendChild(operation)

    RewardsDatas.push(RewardsId);

    var RewardsId = document.getElementById('RewardsId').value = null;
    var RewardsMemberId = document.getElementById('RewardsMemberId').value = null
    var RewardsDate = document.getElementById('RewardsDate').value = null;
    var RewardsReason = document.getElementById('RewardsReason').value = null;
    var RewardsNote = document.getElementById('RewardsNote').value = null

    document.getElementById("RewardsForm").style.display = "none";
    hide = true;

}