import { Component,ViewChild } from '@angular/core';
import { CalendarView,CalendarEvent } from 'angular-calendar';
import { endOfDay, startOfDay,} from 'date-fns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title = 'CalendarApp';
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  setView(view: CalendarView) {
    this.view = view;
  }
 
  events: CalendarEvent[] = [
    {
      start: startOfDay(new Date()),
      title: 'First event',
      end: endOfDay(new Date())
    },
    {
      start: startOfDay(new Date()),
      title: 'Second event',
    }
  ]
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    console.log(date);
  }
}
