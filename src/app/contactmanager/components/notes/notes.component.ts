import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Note} from '../../models/note';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  @Input() notes: Note[];
  displayedColumns = ['id', 'title', 'date'];
  dataSource: MatTableDataSource<Note>;
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Note>(this.notes);
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
