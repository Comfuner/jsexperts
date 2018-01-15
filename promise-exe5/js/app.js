(function(){

    function chkOddEvenDate(theDate) {
        let theDateSecs = theDate.getSeconds();
        let isEven = ((theDateSecs % 2) == 0) ;
        return new Promise((resolve,reject) => {
          if (isEven) {
              resolve(`Success!! The Date seconds is even: ${theDateSecs}`)
          } else {
              reject(`Odd Date seconds: (${theDateSecs}) Promise will reinitialize...`)
          }
        })
    }

    function resFn(result) {
        console.log(result)
    }
    function rejFn(result) {
        console.log(result);
        chkOddEvenDate(new Date()).then(resFn).catch(rejFn);

    }

    chkOddEvenDate(new Date()).then(resFn).catch(rejFn);
})();