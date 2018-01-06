(function(){
        let colorSelector = document.getElementById('color');
        let colorCounter = 0;
        let eventIndex = 0;
        colorSelector.addEventListener('change',function(e){
            colorCounter++;
            let colorSelectorInner = e.target.value;
            (function(colorSelectorInner) {
                setTimeout(function () {
                    eventIndex++;
                    console.log(`
                        Total run times: ${colorCounter}
                        =============================
                        Event index: ${eventIndex}
                        Event color: ${colorSelectorInner} 
                        =============================
                        Current color: ${colorSelector.value}                          
                    `)
                }, 5000)
            }(colorSelectorInner));
        })
    })();