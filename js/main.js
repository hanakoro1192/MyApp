//即時関数
(function() {
    'use strict';

    var ths = document.getElementsByTagName('th');
    var i;
    var sortOrder = 1; // 1:昇順、　-1:降順

    function rebuildTbody(rows){
        var tbody = document.querySelector('tbody');

        while (tbody.firstChild) {
            tbody.removeChild(tbody.firstChild);
        }

        var i;
        for (i = 0; i < rows.length; i++){
            tbody.appendChild(rows[i]);
    }
    }
    for(i = 0; i < ths.length; i++){
        ths[i].addEventListener('click', function(){
            // console.log(this.cellIndex);

            //sort
    // var arr = ['taguti', 'fkoji', 'doinstall'];
    var rows = Array.prototype.slice.call(document.querySelectorAll('tbody > tr')); //セレクタを使用することができる //NodeList
    var col = this.cellIndex;
    var type = this.dataset.type; //string number

    rows.sort(function(a,b){ //tr,tr
        if(type === "number"){
            var _a = a.children[col].textContent * 1;
            var _b = b.children[col].textContent * 1;
        }
        if(type === "string"){
            var _a = a.children[col].textContent.toLowerCase();
            var _b = b.children[col].textContent.toLowerCase();
        }
        if(_a < _b){
            return -1　* sortOrder;
        }
        if(_a > _b){
            return 1 * sortOrder;
        }
        return 0;
    });

    rebuildTbody(rows);

    var k;
    for(k = 0; k < ths.length; k++){
        ths[k].className = '';
    }
    this.className = sortOrder === 1 ? 'asc' : 'desc';

    sortOrder *= -1;

        });

    }
})();