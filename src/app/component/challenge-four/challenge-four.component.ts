import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenge-four',
  templateUrl: './challenge-four.component.html',
  styleUrls: ['./challenge-four.component.css']
})
export class ChallengeFourComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  questionText =
    "\n" +
    " $(document).ready(function() {\n" +
    "    $(\"#groupsBTN\").click(function(event){\n" +
    "       $.getJSON('/instrument/groups?action=getAll, function(response, status) {\n" +
    "          if (status === 200) {\n" +
    "            var groupList = response.data;\n" +
    "            $.each(groupList, function(group) {\n" +
    "              $('#groupList').append('<li> Instrument Group: ' + group.name + '</li>');\n" +
    "            })\n" +
    "          }\n" +
    "       });\n" +
    "    });\n" +
    " });"

}
