var addMemberInformationButton = document.getElementById('addMemberInformationButton');
var MembercancelButton = document.getElementById("MembercancelButton");

var ModifyMembercancelButton = document.getElementById("ModifyMembercancelButton")
/**增加 */
var hide = true;
addMemberInformationButton.onclick = function () {
    if(hide) {
        document.getElementById("MemberForm").style.display = "block";
        hide = false;
    }
}
MembercancelButton.onclick = function() {
    if(hide != true) {
        document.getElementById("MemberForm").style.display = "none";
        hide = true;
    }
}

/**存放公司编号的数组 */
var MemberIdDatas = [];
/**添加公司基本信息数据操作 */
document.getElementById("MembersubmitButton").onclick = function() {
    var tbale = document.getElementById('Member');
    var MemberId = document.getElementById('MemberId').value;
    var MemberName = document.getElementById('MemberName').value;
    var MenberSex = document.getElementById('MenberSex').value;
    var MenberRole = document.getElementById('MenberRole').value;
    var MemberJoinDate = document.getElementById('MemberJoinDate').value;
    var MemberNote = document.getElementById('MemberNote').value;
    var tr = document.createElement("tr");
    tbale.appendChild(tr);

    /**检查有无空项 */
    if(MemberId == "" || MemberName == "" || MenberSex == "" || MenberRole == "" || MemberJoinDate == ""){
        alert("内容有空项，请检查")
        return 0;
    }
    /**检查有无重复编号 */
    for(var i = 0; i < MemberIdDatas.length; i++){
        if(MemberId == MemberIdDatas[i]){
            alert("请勿重复输入");
            return 0;
        }
    }

    var Member1 = document.createElement('td')
    Member1.className = "Member1"
    Member1.appendChild(document.createTextNode(MemberId))
    var Member2 = document.createElement('td')
    Member2.className = "Member2"
    Member2.appendChild(document.createTextNode(MemberName))
    var Member3 = document.createElement('td')
    Member3.className = "Member3"
    Member3.appendChild(document.createTextNode(MenberSex))
    var Member4 = document.createElement('td')
    Member4.className = "Member4"
    Member4.appendChild(document.createTextNode(MenberRole))
    var Member5 = document.createElement('td')
    Member5.className = "Member5"
    Member5.appendChild(document.createTextNode(MemberJoinDate))
    var Member6 = document.createElement('td')
    Member6.className = "Member6"
    Member6.appendChild(document.createTextNode(MemberNote))

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
        var deleteMemberId = this.parentNode.parentNode.firstChild.innerText
        document.getElementById("Member").removeChild(this.parentNode.parentNode)
        /**删除数据 */
        for(var i = 0; i < MemberIdDatas.length; i++){
            if(MemberIdDatas[i] == deleteMemberId){
                MemberIdDatas.splice(i , 1)
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
            document.getElementById("modifyMemberForm").style.display = "block";
            hide = false
            document.getElementById("modifyMemberId").value = values[0].innerText;
            document.getElementById("modifyMemberName").value = values[1].innerText;
            document.getElementById("modifyMenberSex").value = values[2].innerText;
            document.getElementById("modifyMenberRole").value = values[3].innerText;
            document.getElementById("modifyMemberJoinDate").value = values[4].innerText;
            document.getElementById("modifyMemberNote").value = values[5].innerText;
        }
        document.getElementById("ModifyMembersubmitButton").onclick = function(){
            document.getElementById("modifyMemberForm").style.display = "none";
            hide = true

            /**判断编号是否存在 */
            for(var i = 0; i < MemberIdDatas.length; i++){
                if(document.getElementById("modifyMemberId").value == MemberIdDatas[i]){
                    if(document.getElementById("modifyMemberId").value == values[0].innerText){
                        continue;
                    }
                    else{
                        alert("该编号已存在");
                        return 0;
                    }
                }
            }
            /**写入数据 */
            values[0].innerText = document.getElementById("modifyMemberId").value
            values[1].innerText = document.getElementById("modifyMemberName").value
            values[2].innerText = document.getElementById("modifyMenberSex").value
            values[3].innerText = document.getElementById("modifyMenberRole").value
            values[4].innerText = document.getElementById("modifyMemberJoinDate").value
            values[5].innerText = document.getElementById("modifyMemberNote").value
               
        }

        ModifyMembercancelButton.onclick = function(){
            if(hide != true){
                document.getElementById("modifyMemberForm").style.display = "none";
                hide = true
            }
        }
        hide = false;
    })


    tr.appendChild(Member1)
    tr.appendChild(Member2)
    tr.appendChild(Member3)
    tr.appendChild(Member4)
    tr.appendChild(Member5)
    tr.appendChild(Member6)
    operation.appendChild(deleteCompany)
    operation.appendChild(p)
    operation.appendChild(modifyCompany)
    tr.appendChild(operation)

    MemberIdDatas.push(MemberId);

    var MemberId = document.getElementById('MemberId').value = null;
    var MemberName = document.getElementById('MemberName').value = null
    var MenberSex = document.getElementById('MenberSex').value = null;
    var MenberRole = document.getElementById('MenberRole').value = null;
    var MemberJoinDate = document.getElementById('MemberJoinDate').value = null
    var MemberNote = document.getElementById('MemberNote').value = null

    document.getElementById("MemberForm").style.display = "none";
    hide = true;

}

