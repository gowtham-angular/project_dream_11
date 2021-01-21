import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog,  MatDialogConfig,  MatDialogRef, } from '@angular/material/dialog';
import { DialogformComponent } from './dialogform/dialogform.component';

export interface PlayerDetails {
  unique_id: number;
  name: string;
  playing_role: string;
  batting: string;
  bowling: string;
  country: string;
  credits: number;
  batting_position: number;
  batting_rating: number;
  bowling_rating: number;
}

const ELEMENT_DATA: PlayerDetails[] = [
  { unique_id: 1, name: 'John Doe', playing_role: 'Opening Batsman', batting: 'Right hand ', bowling: '', country: 'India', credits: 9,batting_position: 1, batting_rating: 9, bowling_rating: 5 },
  { unique_id: 2, name: 'Sarah Smith', playing_role: 'Middle order', batting: 'Right hand', bowling: '', country: 'India', credits: 9,batting_position: 1, batting_rating: 9, bowling_rating: 5 },
  { unique_id: 3, name: 'Airi Satou', playing_role: 'Bowler', batting: 'Left hand', bowling: '', country: 'Australia', credits: 8,batting_position: 1, batting_rating: 9, bowling_rating: 5 },
 
];
@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.sass']
})
export class PlayerDetailsComponent implements OnInit {
  displayedColumns: string[] = ['unique_id', 'name', 'playing_role', 'batting', 'bowling', 'credits', 'batting_position', 'batting_rating', 'bowling_rating'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor( private dialogModel: MatDialog,) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(): void {
    const dialogRef = this.dialogModel.open(DialogformComponent, {
      width: '640px',
      disableClose: true,
    });
  }
  close(): void {
  }
}
