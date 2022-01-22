import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Search } from '../../interfaces/search';
import { WeatherService } from '../../services/weather.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-table-history',
  templateUrl: './table-history.component.html',
  styleUrls: ['./table-history.component.scss']
})

export class TableHistoryComponent implements OnInit {
   listSearches:Search[]=[];
  dataSource!:MatTableDataSource<any>;

  constructor(private weatherService:WeatherService) { }
  ngOnInit(): void {
   this.loadSearches()
  }
  displayedColumns: string[] = ['position', 'city', 'date','hour'];
  
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  deleteSearch(){
    this.weatherService.deleteSearch();
    this.loadSearches()

  }
loadSearches(){
  this.listSearches=this.weatherService.searches.map((search,index)=>{
    return {
      id:index+1,
      city:search.city,
      hour:search.hour,
      date:search.date
    }
  })
  this.dataSource=new MatTableDataSource(this.listSearches)
}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
