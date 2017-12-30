var contents = {};

function getContents() {
    var content_url = "content.json";

    $.support.cors = true;
    $.getJSON(content_url, function () {
        console.log("success");
    }).done(function (json) {
        console.log("second success");
        if (json && json.contents) {
            contents = json.contents;
            fillHeader();
            fillFooter();
        }
        else {
            // parse error
            console.log("parse error");
        }
    }).fail(function (jqxhr, textStatus, error) {
        console.log("error");
    }).always(function () {
        console.log("complete");
    });
}

function fillHeader() {

    var content = {};
    var index_content = 0; 
    for (index_content = 0; index_content < contents.length; index_content++) {
        var content_temp = contents[index_content];
        if (content_temp.lang === "ko") {
            content = content_temp.content;
        }
    }

    console.log(content);

    var report_no = content.report_no;
    var name = content.name;
    var course = content.course;
    var period = content.period;
    var instructor = content.instructor;

    var code = "<div class='top'>\
    <div>\
        <span>No.</span>\
        <span>" + report_no + "</span>\
    </div>\
    </div>\
    <div class='name'>" + name + "</div>\
    <div class='description'>\
        <p>위 학생은 코더스하이 교육과정을</p>\
        <p>성공적으로 수료하였습니다.</p>\
    </div>\
    <div>\
        <div>\
            <div>교육과정</div>\
            <div>" + course + "</div>\
        </div>\
        <div>\
            <div>교육기간</div>\
            <div>" + period +  "</div>\
        </div>\
        <div>\
            <div>강사</div>\
            <div>" + instructor + "</div>\
        </div>\
    </div>";
    document.getElementById("certificateForm").innerHTML = code;
}

function fillFooter() {

}

window.onload = function () {
    getContents();
    $("#report_detail").load("detail/report_detail.html");
};