import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as TemplateRewardActions from '../../actions';
import { TemplateRewardDTO } from '../../models/template-reward.dto';
import { TemplateRewardDeleteDialogComponent } from '../template-reward-delete-dialog/template-reward-delete-dialog.component';

@Component({
  selector: 'app-template-reward',
  templateUrl: './template-reward.component.html',
  styleUrls: ['./template-reward.component.scss']
})
export class TemplateRewardComponent implements OnInit {

  group_id!: string;
  templateReward_id: string | null;
  action: string | null;

  template: TemplateRewardDTO;

  name!: FormControl;
  description!: FormControl;
  cost!: FormControl;
  icon!: FormControl;
  color!: FormControl;
  templateRewardForm!: FormGroup;

  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
  ) {
    const group_id = this.activatedRoute.snapshot.paramMap.get('group_id');
    this.templateReward_id = this.activatedRoute.snapshot.paramMap.get('templateReward_id');
    this.action = this.activatedRoute.snapshot.paramMap.get('action');

    this.template = new TemplateRewardDTO('','','','',0,'','');

    if(group_id) {
      this.group_id = group_id;
    } else {
      // Si no te group_id, url incorrecte
      this.router.navigate(['/']);
    }

    if(this.templateReward_id == null) {
      // Si no te templateReward_id, es que estem a la pàgina de creació de tasca
      this.action = 'create';
    }

    if(this.action === 'create' || this.action === 'edit') {
      this.initForm();
    }

    if(this.action != 'create') {
      // Obtenim dades de la tasca
      this.store.select(state => state.templateReward.templateReward).subscribe(templateReward => {
        this.template = templateReward;

        if(this.templateRewardForm) {
          this.name.setValue(templateReward.name);
          this.description.setValue(templateReward.description);
          this.cost.setValue(templateReward.cost);
          this.icon.setValue(templateReward.icon);
          this.color.setValue(templateReward.color);
        }

      });
    }

    this.store.select(state => state.templateReward.payload).subscribe(payload => {
      if(payload && payload.action){
        if(payload.action === 'createTemplateRewardSuccess'){
          this.router.navigate(['/group', payload.group_id, 'template','reward', payload.templateReward_id, 'view']);
        }
        if(payload.action === 'updateTemplateRewardSuccess'){
          this.router.navigate(['/group/', payload.group_id, 'template','reward', payload.templateReward_id, 'view']);
        }
        if(payload.action === 'deleteTemplateRewardSuccess'){
          this.router.navigate(['/group', payload.group_id]);
        }
        if(payload.action === 'claimTemplateRewardSuccess'){
          this.router.navigate(['/group', payload.reward.group_id,'reward', payload.reward.id, 'view']);
        }
      }
    });
  }

  ngOnInit(): void {
    if(this.templateReward_id){
      this.store.dispatch(TemplateRewardActions.getTemplateReward({group_id: this.group_id, templateReward_id: this.templateReward_id}));
    }
  }

  initForm() {
    this.name = new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
    ]);

    this.description = new FormControl('', [
      Validators.required,
      Validators.maxLength(255),
    ]);

    this.cost = new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]);

    this.icon = new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
    ]);

    this.color = new FormControl('', [
      Validators.required,
      Validators.maxLength(7),
    ]);

    this.templateRewardForm = this.formBuilder.group({
      name: this.name,
      description: this.description,
      cost: this.cost,
      icon: this.icon,
      color: this.color,
    });
  }

  save(): void {
    if(this.templateRewardForm.invalid){
      return
    }

    this.template = new TemplateRewardDTO(
      this.templateReward_id == null ? '' : this.templateReward_id, 
      this.group_id, 
      this.templateRewardForm.value.name, 
      this.templateRewardForm.value.description, 
      this.templateRewardForm.value.cost,
      this.templateRewardForm.value.color,
      this.templateRewardForm.value.icon,
    );

    if(this.action === 'create') {
      this.store.dispatch(TemplateRewardActions.createTemplateReward({group_id: this.group_id, templateReward: this.template}));
    } else if(this.action === 'edit') {
      this.store.dispatch(TemplateRewardActions.updateTemplateReward({group_id: this.group_id, templateReward: this.template}));
    }
  }

  edit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigate(['/group', this.group_id, 'template','reward', this.templateReward_id, 'edit']);
  }

  back(): void {
    this.router.navigate(['/group', this.group_id]);
  }

  deleteDialog(): void {
    const dialogRef = this.dialog.open(TemplateRewardDeleteDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result != undefined && result && this.templateReward_id) {
        this.store.dispatch(TemplateRewardActions.deleteTemplateReward({ group_id: this.group_id, templateReward_id: this.templateReward_id }));
      } 
    });
  }

  claim(): void {
    if(this.templateReward_id) {
      this.store.dispatch(TemplateRewardActions.claimTemplateReward({ group_id: this.group_id, templateReward_id: this.templateReward_id }));
    }
  }

}
