
var toastElList = [].slice.call(document.querySelectorAll('.toast'))
    var toastList = toastElList.map(function (toastEl) {
        return new bootstrap.Toast(toastEl, {delay: 1500})
    });
    var notEmplErr = toastList[0];

    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })

    var currentModal = 0;
    var modalText = ["Описание1" +
    `  <a href='#' data-bs-toggle="popover" title="Подсказка1" data-bs-content="текст подсказки1">Подсказка1</a>`
        ,
        "Описание2" +
    `  <a href='#' data-bs-toggle="popover" title="Подсказка2" data-bs-content="текст подсказки2">Подсказка2</a>`
        ,
        "Описание3" +
    `  <a href='#' data-bs-toggle="popover" title="Подсказка3" data-bs-content="текст подсказки3">Подсказка3</a>`
        ,
        "Описание4" +
    `  <a href='#' data-bs-toggle="popover" title="Подсказка4" data-bs-content="текст подсказки4">Подсказка4</a>`
        ,
        "Описание5" +
    `  <a href='#' data-bs-toggle="popover" title="Подсказка5" data-bs-content="текст подсказки5">Подсказка5</a>`
    ]
    var modalCount = modalText.length;
    var exampleModal = document.getElementById('exampleModal')
    function showInfo(i) {
        if(i >= 0) i = i % modalCount;
        else i = modalCount - 1;
        var modalParagraph = exampleModal.querySelector('.modal-body');
        let text = modalText[i];
        modalParagraph.innerHTML = text
        var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl)
        })
        currentModal = i;
    }
    exampleModal.addEventListener('show.bs.modal', function (event) {
        let button = event.relatedTarget    
        let num = button.getAttribute('data-bs-num')
        showInfo(num);
    });
    exampleModal.addEventListener("keydown", event => {
        if (event.code === "ArrowLeft") {
            showInfo(currentModal - 1);
            //перекл влево;
        } else if (event.code === "ArrowRight") {
            showInfo(currentModal + 1);
            //перекл вправо;
        }
    });
    $(document).ready(function() {
        // При клике на кнопку, открываем модальное окно
        $("#myBtn").click(function() {
            $("#myModal").css("display", "block");
        });

        // При клике на крестик, закрываем модальное окно
        $(".close").click(function() {
            $("#myModal").css("display", "none");
        });

        // При клике вне модального окна, закрываем его
        $(window).click(function(event) {
            if (event.target.id == "myModal") {
                $("#myModal").css("display", "none");
            }
        });
    });