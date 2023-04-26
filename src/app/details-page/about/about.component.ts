import { Component, OnInit, Input } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { FormGroup, FormControlName } from '@angular/forms';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @Input() organizations: any;
  public availableFormData: any;
  public tabsName: any = [];
  public selectedTabIndex = 0;
  public formData: FormGroup;
  public openGroupModal: boolean = false;
  public groups: any = [];
  public independentFields: any = [];
  public GroupName = '';
  public fields: any;
  public finalData: any = [];

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.getForms();
  }

  public getForms() {
    this.service.getForms().subscribe((res) => {
      // this.fields = res[0];
      // let parentGroups: any = [];
      // let childGroups: any = [];
      // let fields: any = [];
      // res[this.selectedTabIndex].Fields.forEach((field: any) => {
      //   if (field.GroupParserName === "" && field.IsFieldGroup) {
      //     parentGroups.push(field);

      //   } else if (field.GroupParserName !== "") {
      //     childGroups.push(field);
      //   } else if (!field.IsFieldGroup && field.GroupParserName === '') {
      //     fields.push(field);
      //   }
      // })
      // parentGroups.forEach((group: any) => {
      //   childGroups.forEach((child: any) => {
      //     if (group.ParserName === child.GroupParserName) {
      //       // this.finalData.push({})
      //     }
      //   })
      // })
      // console.log('parent=>',parentGroups, 'child=>',childGroups, 'indepenedent=>',fields)

      this.availableFormData = res;
      this.availableFormData.forEach((item: any) => {
        this.tabsName.push({ editMode: false, name: item.TabName })
      })
    })
  }

  filterGroups() {
    this.groups = [];
    this.independentFields = [];
    this.availableFormData[this.selectedTabIndex].Fields.forEach((item: any) => {
      if (item.IsFieldGroup === true) {
        this.groups.push(item)
      }
      if (item.IsFieldGroup === false && item.GroupParserName === '') {
        this.independentFields.push(item)
      }
    })
    console.log(this.groups);
  }

  addTab() {
    this.tabsName.push({ editMode: true, name: 'New Tab' });
  }

  public tabChanged(event: MatTabChangeEvent) {
    this.selectedTabIndex = event.index;
    this.filterGroups()
  }

  public addField() {

  }

  public addGroup() {
    this.openGroupModal = !this.openGroupModal;
  }

  public createGroup() {
    this.groups.push({ DisplayName: this.GroupName })
    this.openGroupModal = false;
    this.GroupName = '';
  }

  public closeAddGroupModal() {
    this.openGroupModal = false;
  }

}
