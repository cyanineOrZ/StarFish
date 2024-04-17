let CompanyInformation = document.getElementById('CompanyInformation');
let MemberInformation = document.getElementById('MemberInformation');
let MemberRewards = document.getElementById('MemberRewards');
let MemberEvaluation = document.getElementById('MemberEvaluation');
let MemberTrain = document.getElementById('MemberTrain');
let MemberAchievement = document.getElementById('MemberAchievement');

var divarr = [
    CompanyInformation
    ,MemberInformation
    ,MemberRewards
    ,MemberEvaluation
    ,MemberTrain
    ,MemberAchievement
    ];


let CompanyInformationButton = document.getElementById('CompanyInformationButton');
let MemberInformationButton = document.getElementById('MemberInformationButton');
let MemberRewardsButton = document.getElementById('MemberRewardsButton');
let MemberEvaluationButton = document.getElementById('MemberEvaluationButton');
let MemberTrainButton = document.getElementById('MemberTrainButton');
let MemberAchievementButton = document.getElementById('MemberAchievementButton');

var button = [
    CompanyInformationButton
    ,MemberInformationButton
    ,MemberRewardsButton
    ,MemberEvaluationButton
    ,MemberTrainButton
    ,MemberAchievementButton
    ];

CompanyInformationButton.onclick = function () {
    visitable = 0;
    for(var i = 0; i < divarr.length; i++) {
        if(i == visitable) {
            divarr[i].style.display = "block";
        }
        else {
            divarr[i].style.display = "none";
        }
    }
}

MemberInformationButton.onclick = function() {
    var visitable = 1;
    for(var i = 0; i < divarr.length; i++) {
        if(i == visitable) {
            divarr[i].style.display = "block";
        }
        else {
            divarr[i].style.display = "none";
        }
    }
}

MemberRewardsButton.onclick = function() {
    var visitable = 2;
    for(var i = 0; i < divarr.length; i++) {
        if(i == visitable) {
            divarr[i].style.display = "block";
        }
        else {
            divarr[i].style.display = "none";
        }
    }
}

MemberEvaluationButton.onclick = function() {
    var visitable = 3;
    for(var i = 0; i < divarr.length; i++) {
        if(i == visitable) {
            divarr[i].style.display = "block";
        }
        else {
            divarr[i].style.display = "none";
        }
    }
}

MemberTrainButton.onclick = function() {
    var visitable = 4;
    for(var i = 0; i < divarr.length; i++) {
        if(i == visitable) {
            divarr[i].style.display = "block";
        }
        else {
            divarr[i].style.display = "none";
        }
    }
}

MemberAchievementButton.onclick = function() {
    var visitable = 5;
    for(var i = 0; i < divarr.length; i++) {
        if(i == visitable) {
            divarr[i].style.display = "block";
        }
        else {
            divarr[i].style.display = "none";
        }
    }
}