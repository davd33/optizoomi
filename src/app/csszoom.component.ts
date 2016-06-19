import {Component, OnInit} from "@angular/core";

export class Style {
  width:string;
  height:string;
  background:string;
  top:string;
  left:string;
  transform:string;
}
export class Element {
  txt:string;
  style:Style;
}

@Component({
  moduleId: module.id,
  selector: 'csszoom-app',
  templateUrl: 'csszoom.component.html',
  styleUrls: ['csszoom.component.css']
})
export class CsszoomAppComponent implements OnInit {
  title = 'csszoom works!';
  isClicked:boolean = false;
  elements:Element[];

  ngOnInit():any {
    var e1 = new Element();
    var s1 = new Style();
    s1.width = "20px";
    s1.height = "30px";
    s1.background = "green";
    s1.top = "30px";
    s1.left = "120px";
    e1.txt = "";
    e1.style = s1;
    var e2 = new Element();
    var s2 = new Style();
    s2.width = "20px";
    s2.height = "30px";
    s2.background = "lightblue";
    s2.top = "60px";
    s2.left = "80px";
    e2.txt = "";
    e2.style = s2;

    this.elements = [
      e1, e2
    ];
  }

  clicked(event) {
    let elt = event.toElement, parent = elt.offsetParent;
    let wElt = elt.offsetWidth, hElt = elt.offsetHeight;
    let wParent = parent.offsetWidth, hParent = parent.offsetHeight;
    let topElt = elt.offsetTop, leftElt = elt.offsetLeft;

    let tx = (wParent / 2) - ((wElt / 2) + leftElt);
    let ty = (hParent / 2) - ((hElt / 2) + topElt);

    this.slide(tx, ty);
  }

  slide(tx:number, ty:number) {
    for (let e of this.elements) {
      e.style.transform = "translate(" + tx + "px," + ty + "px)";
      // e.style.transform += " scale(5)"
    }
  }
}
