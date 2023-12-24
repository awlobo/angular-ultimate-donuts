import { CurrencyPipe, NgClass, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Donut } from '../../models/donut.model';

@Component({
  standalone: true,
  imports: [RouterModule, NgClass, NgSwitch, NgSwitchCase, CurrencyPipe],
  selector: 'donut-card',
  template: `
    <a
      class="donut-card"
      [routerLink]="donut.id"
      [ngClass]="{ promo: donut.promo }"
    >
      <img
        src="/assets/img/{{ donut.icon }}.svg"
        alt="{{ donut.name }}"
        class="icon"
      />
      <div>
        <p class="name">
          {{ donut.name }}
          <ng-container [ngSwitch]="donut.promo">
            <!-- <span class="label">
              <ng-template [ngSwitchCase]="'new'">NEW</ng-template>
              <ng-template [ngSwitchCase]="'limited'">LIMITED</ng-template>
              <ng-template ngSwitchDefault>...</ng-template>
            </span> -->
            <span *ngSwitchCase="'new'" class="label">NEW</span>
            <span *ngSwitchCase="'limited'" class="label">LIMITED</span>
            <!-- <span *ngSwitchDefault class="label">Nothing special...</span> -->
          </ng-container>
        </p>
        <p class="price">
          {{ donut.price / 100 | currency : 'EUR' : 'symbol' }}
        </p>
      </div>
    </a>
  `,
  styles: [
    `
      .donut-card {
        display: flex;
        align-items: center;
        background: #f7f7f7;
        border-radius: 5px;
        margin-bottom: 5px;
        padding: 5px 15px;
        transition: transform 0.2s ease-in-out;

        &:hover {
          transform: translateY(-3px);
        }

        .name {
          font-size: 16px;
        }

        .label {
          border: 1px solid #c14583;
          border-radius: 4px;
          padding: 0px 4px;
          margin-left: 5px;
          font-size: 12px;
          color: #c14583;
        }

        .price {
          font-size: 14px;
          color: #c14583;
        }

        .icon {
          width: 50px;
          margin-right: 10px;
        }
      }
      .promo {
        border: 3px solid #eee;
      }
    `,
  ],
})
export class DonutCardComponent {
  @Input() donut!: Donut;
  constructor() {}
}
