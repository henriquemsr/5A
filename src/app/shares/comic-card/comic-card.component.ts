import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-comic-card",
  templateUrl: "./comic-card.component.html",
  styleUrls: ["./comic-card.component.scss"],
})
export class ComicCardComponent implements OnInit {
  @Input() image: String =
    "https://icon-library.com/images/no-photo-icon/no-photo-icon-15";
  @Input() title: String;
  @Input() extension: String = "jpg";

  constructor() {}

  ngOnInit(): void {}
}
