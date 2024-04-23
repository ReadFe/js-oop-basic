class Table {

    raw = document.getElementById('table')
    
    
    makeHeader() {
        let header = document.createElement('thead')
        header.innerHTML = 
        "<tr><th>" + columns[0] + "</th><th>" + columns[1] + "</th></tr>"

        return header
    }
    
    makeBody() {
        let body = document.createElement('tbody')
        body.innerHTML = 
        `<tr>
            <td>${data[0][0]}</td>  
            <td>${data[0][1]}</td>    
        </tr>`+
        `<tr>
            <td>${data[1][0]}</td>  
            <td>${data[1][1]}</td>    
        </tr>`

        return body
    }
    
    makeTable() { 
        let table = document.createElement('table')
        table.classList.add('table', 'table-hover')

        var thead = this.makeHeader()
        var tbody = this.makeBody()

        table.append(thead)
        table.append(tbody)
        
        this.raw.append(table)
        
    }

}



var columns = ['Name', 'Email'];
var data = [
        ['John Chena', 'johnchena@gmail.com'],
        ['John Wick', 'johnwick@gmail.com']
    ]

const run = new Table()
run.makeHeader()
run.makeBody()
run.makeTable()