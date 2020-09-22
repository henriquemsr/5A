import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-character-card",
  templateUrl: "./character-card.component.html",
  styleUrls: ["./character-card.component.scss"],
})
export class CharacterCardComponent implements OnInit {
  @Input() image: String =
    "https://icon-library.com/images/no-photo-icon/no-photo-icon-15";
  @Input() title: String = "";
  @Input() subtitle: String = "";
  @Input() description: String = "";
  @Input() extension: String = "jpg";

  constructor() {}

  ngOnInit(): void {}
}
