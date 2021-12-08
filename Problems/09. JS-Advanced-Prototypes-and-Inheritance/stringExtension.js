(function solve() {
    String.prototype.ensureStart = function(str) {
        let toStr = this.toString();
        if (toStr.startsWith(str)) {
            return toStr;
        } else {
            return str + toStr;
        }
    };

    String.prototype.ensureEnd = function(str) {
        let toStr = this.toString();
        if (toStr.indexOf(str) != -1) {
            return toStr;
        } else {
            return toStr + str;
        }
    };

    String.prototype.isEmpty = function() {
        return this.length == 0;
    };

    String.prototype.truncate = function(n) {
        let toStr = this.toString();
        if (this.length <= n) {
            return toStr;
        } 
        if (this.length > n) {
           if (this.includes(' ')) {
               let spaceIdx = this.indexOf(' ');
               let nextSpaceIdx = this.indexOf(' ', spaceIdx + 1);

               while (nextSpaceIdx > 0 && nextSpaceIdx + 3 <= n) {
                   spaceIdx = nextSpaceIdx;
                   nextSpaceIdx = this.indexOf(' ', spaceIdx + 1);
               }

               return this.slice(0, spaceIdx) + '...';
           } else {
               if (n < 4) {
                   return '.'.repeat(n);
               }

               return this.slice(0, n -3) + '...';
           }
        };
    };

    String.format = function(string, ...params) {
        let result = string;
        for (let i =0; i < params.length; i++) {
            result = result.replace(`{${i}}`, params[i]);
        }
        return result;
    };

    
})();

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
  'quick', 'brown');
str = String.format('jumps {0} {1}',
  'dog');
