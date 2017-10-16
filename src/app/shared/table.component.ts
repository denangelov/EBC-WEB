import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'table-component',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent {
    @Input() dataSource: Object[] = [];
    
    private headers: string[] = [];
    private data: string[][] = [];
    public headerStyle: any;

    public ngOnInit() {
        this.headers = this.getHeaders();
        this.headerStyle = {
            'width': `calc(100%/${this.headers.length})`
        }
        this.data = this.getData();
        console.log(this.data);
    }

    private getHeaders(): string[] {
        let headers: string[] = [];
        if(this.dataSource.length > 0) {
            const dataElement: any = this.dataSource[0];
            headers = Object.keys(dataElement);
        }
        return headers;
    }

    private getData(): string[][] {
        let data: string[][] = [];
        this.dataSource.forEach((dataElement: Object) => {
            let dataElementArray: string[] = Object.keys(dataElement).map((key: string): string => {
                return dataElement[key].toString();
            })
            data.push(dataElementArray);
        });
        return data;
    }
}
