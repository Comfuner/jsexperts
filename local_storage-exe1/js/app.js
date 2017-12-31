(function(){
        // updating the range input value visually
        var ageRange = document.getElementById('age')
        ageRange.setAttribute('data-value', ageRange.value);
        ageRange.addEventListener('input',function() {
            this.setAttribute('data-value', this.value);
        });

        // declaring storage name and content
        var storageName = 'tempDB';
        var localStorageContent = JSON.parse(localStorage.getItem(storageName)) || [];
        // print the list on load
        printLi();

        function UpdateDb() {
            var tempObj = {
                name : document.getElementById('name').value,
                color : document.getElementById('color').value,
                date :document.getElementById('date').value,
                age: document.getElementById('age').value
            }

            localStorageContent.push(tempObj);
            var localStorageContentStr = JSON.stringify(localStorageContent)
            localStorage.setItem(storageName,localStorageContentStr);
            console.log('Local storage has been updated!')
            // print the list on update
            printLi();
        }

        function printLi() {
            var theList = document.getElementById('thelist');
            theList.innerHTML="";
            localStorageContent.map(function (item) {
                var tempLi = document.createElement('li');
                tempLi.innerHTML = item.name + ", " + item.age + ", " + item.date;
                tempLi.style.color = item.color;
                theList.appendChild(tempLi)
            })
        }

    var sendButton = document.getElementById("sendTo");
    sendButton.addEventListener('click', UpdateDb)
})();