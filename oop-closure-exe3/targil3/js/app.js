
    function Shape(x,y,color){
        this.x = x;
        this.y = y;
        this.color = color;
        this.getDistance = function(){
            return (`
        The distance is: ${Math.sqrt(Math.pow(this.x,this.x) + Math.pow(this.y,this.y))}
        `);
        }
    }

    Shape.prototype.toString = function() {
        return(`
            x = ${this.x}
            y = ${this.y}
            color = ${this.color}
        `)
    };


