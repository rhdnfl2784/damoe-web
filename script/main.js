function open_mailer(){/* 모달 팝업창 보여주는 기능 */
    let modal = document.querySelector("#modal")
    modal.style.display = "block"
}

function close_mailer(){/* 모달 팝업창 감추는 기능 */
    let close = document.querySelector(".close-modal")
    let modal = document.querySelector("#modal")
    close.addEventListener("click", function(){
        modal.style.display = "none"
    })
}
close_mailer(); // 모달 닫기 기능을 실행해줘!

function address_find(){
    alert("DB 점검으로 인해 해당 서비스 이용이 불가능합니다!")
}