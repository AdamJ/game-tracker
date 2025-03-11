import{e as Ze,i as A,d as I,S as $,x as g,f as Bt,g as st,_ as i,h as k,b as C,n as o,j as Yt,w as x,F as Mt,H as kt,k as T,o as L,l as Rt,m as Ce,p as W,L as R,q as ft,u as at,v as nt,y as ne,z as Xt,A as _e,B as Je,C as $e,E as ce,D as Se,T as Ue,G as ze,I as he,J as At,K as ts,M as es,N as ss,O as is,P as as,Q as rs,R as os,U as ls,V as fe,W as me,X as ns,Y as cs,Z as ds,$ as Ee,a as hs}from"./index-Bzm2RTzS.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Gt(t){return(e,s)=>{const a=typeof e=="function"?e:e[s];Object.assign(a,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function us(t){return(e,s)=>Ze(e,s,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(t)??null}})}var ps=A`
  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,Ae=class extends ${render(){return g` <slot></slot> `}};Ae.styles=[I,ps];Ae.define("sl-visually-hidden");var fs=A`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`,ms=A`
  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`,gs=A`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,X=class extends ${constructor(){super(...arguments),this.formControlController=new Mt(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new kt(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=this.helpText?!0:!!t;return g`
      <div
        class=${T({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${T({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${L(this.value)}
            .indeterminate=${Rt(this.indeterminate)}
            .checked=${Rt(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
            class="checkbox__control"
          >
            ${this.checked?g`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?g`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `:""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${e?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};X.styles=[I,Bt,gs];X.dependencies={"sl-icon":st};i([k('input[type="checkbox"]')],X.prototype,"input",2);i([C()],X.prototype,"hasFocus",2);i([o()],X.prototype,"title",2);i([o()],X.prototype,"name",2);i([o()],X.prototype,"value",2);i([o({reflect:!0})],X.prototype,"size",2);i([o({type:Boolean,reflect:!0})],X.prototype,"disabled",2);i([o({type:Boolean,reflect:!0})],X.prototype,"checked",2);i([o({type:Boolean,reflect:!0})],X.prototype,"indeterminate",2);i([Yt("checked")],X.prototype,"defaultChecked",2);i([o({reflect:!0})],X.prototype,"form",2);i([o({type:Boolean,reflect:!0})],X.prototype,"required",2);i([o({attribute:"help-text"})],X.prototype,"helpText",2);i([x("disabled",{waitUntilFirstUpdate:!0})],X.prototype,"handleDisabledChange",1);i([x(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],X.prototype,"handleStateChange",1);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function De(t,e,s){return t?e(t):s?.(t)}var K=class xe extends ${constructor(){super(...arguments),this.localize=new R(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(e){return e instanceof Element&&e.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await ft(this.childrenContainer);const{keyframes:e,options:s}=at(this,"tree-item.collapse",{dir:this.localize.dir()});await nt(this.childrenContainer,ne(e,this.childrenContainer.scrollHeight),s),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const e=this.parentElement;return!!e&&xe.isTreeItem(e)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(e){e.has("selected")&&!e.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await ft(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:e,options:s}=at(this,"tree-item.expand",{dir:this.localize.dir()});await nt(this.childrenContainer,ne(e,this.childrenContainer.scrollHeight),s),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:e=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(s=>xe.isTreeItem(s)&&(e||!s.disabled)):[]}render(){const e=this.localize.dir()==="rtl",s=!this.loading&&(!this.isLeaf||this.lazy);return g`
      <div
        part="base"
        class="${T({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":s,"tree-item--rtl":this.localize.dir()==="rtl"})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?"item--disabled":""}
            ${this.expanded?"item--expanded":""}
            ${this.indeterminate?"item--indeterminate":""}
            ${this.selected?"item--selected":""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${T({"tree-item__expand-button":!0,"tree-item__expand-button--visible":s})}
            aria-hidden="true"
          >
            ${De(this.loading,()=>g` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${De(this.selectable,()=>g`
              <sl-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${this.disabled}"
                ?checked="${Rt(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></sl-checkbox>
            `)}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};K.styles=[I,ms];K.dependencies={"sl-checkbox":X,"sl-icon":st,"sl-spinner":Ce};i([C()],K.prototype,"indeterminate",2);i([C()],K.prototype,"isLeaf",2);i([C()],K.prototype,"loading",2);i([C()],K.prototype,"selectable",2);i([o({type:Boolean,reflect:!0})],K.prototype,"expanded",2);i([o({type:Boolean,reflect:!0})],K.prototype,"selected",2);i([o({type:Boolean,reflect:!0})],K.prototype,"disabled",2);i([o({type:Boolean,reflect:!0})],K.prototype,"lazy",2);i([k("slot:not([name])")],K.prototype,"defaultSlot",2);i([k("slot[name=children]")],K.prototype,"childrenSlot",2);i([k(".tree-item__item")],K.prototype,"itemElement",2);i([k(".tree-item__children")],K.prototype,"childrenContainer",2);i([k(".tree-item__expand-button slot")],K.prototype,"expandButtonSlot",2);i([x("loading",{waitUntilFirstUpdate:!0})],K.prototype,"handleLoadingChange",1);i([x("disabled")],K.prototype,"handleDisabledChange",1);i([x("selected")],K.prototype,"handleSelectedChange",1);i([x("expanded",{waitUntilFirstUpdate:!0})],K.prototype,"handleExpandedChange",1);i([x("expanded",{waitUntilFirstUpdate:!0})],K.prototype,"handleExpandAnimation",1);i([x("lazy",{waitUntilFirstUpdate:!0})],K.prototype,"handleLazyChange",1);var Kt=K;W("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});W("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});function Y(t,e,s){const a=r=>Object.is(r,-0)?0:r;return t<e?a(e):t>s?a(s):a(t)}function Le(t,e=!1){function s(l){const n=l.getChildrenItems({includeDisabled:!1});if(n.length){const d=n.every(p=>p.selected),c=n.every(p=>!p.selected&&!p.indeterminate);l.selected=d,l.indeterminate=!d&&!c}}function a(l){const n=l.parentElement;Kt.isTreeItem(n)&&(s(n),a(n))}function r(l){for(const n of l.getChildrenItems())n.selected=e?l.selected||n.selected:!n.disabled&&l.selected,r(n);e&&s(l)}r(t),a(t)}var Ot=class extends ${constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new R(this),this.initTreeItem=t=>{t.selectable=this.selection==="multiple",["expand","collapse"].filter(e=>!!this.querySelector(`[slot="${e}-icon"]`)).forEach(e=>{const s=t.querySelector(`[slot="${e}-icon"]`),a=this.getExpandButtonIcon(e);a&&(s===null?t.append(a):s.hasAttribute("data-default")&&s.replaceWith(a))})},this.handleTreeChanged=t=>{for(const e of t){const s=[...e.addedNodes].filter(Kt.isTreeItem),a=[...e.removedNodes].filter(Kt.isTreeItem);s.forEach(this.initTreeItem),this.lastFocusedItem&&a.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=t=>{const e=t.relatedTarget;(!e||!this.contains(e))&&(this.tabIndex=0)},this.handleFocusIn=t=>{const e=t.target;t.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),Kt.isTreeItem(e)&&!e.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=e,this.tabIndex=-1,e.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect()}getExpandButtonIcon(t){const s=(t==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(s){const a=s.cloneNode(!0);return[a,...a.querySelectorAll("[id]")].forEach(r=>r.removeAttribute("id")),a.setAttribute("data-default",""),a.slot=`${t}-icon`,a}return null}selectItem(t){const e=[...this.selectedItems];if(this.selection==="multiple")t.selected=!t.selected,t.lazy&&(t.expanded=!0),Le(t);else if(this.selection==="single"||t.isLeaf){const a=this.getAllTreeItems();for(const r of a)r.selected=r===t}else this.selection==="leaf"&&(t.expanded=!t.expanded);const s=this.selectedItems;(e.length!==s.length||s.some(a=>!e.includes(a)))&&Promise.all(s.map(a=>a.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:s}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(t){t?.focus()}handleKeyDown(t){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(t.key)||t.composedPath().some(r=>{var l;return["input","textarea"].includes((l=r?.tagName)==null?void 0:l.toLowerCase())}))return;const e=this.getFocusableItems(),s=this.localize.dir()==="ltr",a=this.localize.dir()==="rtl";if(e.length>0){t.preventDefault();const r=e.findIndex(c=>c.matches(":focus")),l=e[r],n=c=>{const p=e[Y(c,0,e.length-1)];this.focusItem(p)},d=c=>{l.expanded=c};t.key==="ArrowDown"?n(r+1):t.key==="ArrowUp"?n(r-1):s&&t.key==="ArrowRight"||a&&t.key==="ArrowLeft"?!l||l.disabled||l.expanded||l.isLeaf&&!l.lazy?n(r+1):d(!0):s&&t.key==="ArrowLeft"||a&&t.key==="ArrowRight"?!l||l.disabled||l.isLeaf||!l.expanded?n(r-1):d(!1):t.key==="Home"?n(0):t.key==="End"?n(e.length-1):(t.key==="Enter"||t.key===" ")&&(l.disabled||this.selectItem(l))}}handleClick(t){const e=t.target,s=e.closest("sl-tree-item"),a=t.composedPath().some(r=>{var l;return(l=r?.classList)==null?void 0:l.contains("tree-item__expand-button")});!s||s.disabled||e!==this.clickTarget||(a?s.expanded=!s.expanded:this.selectItem(s))}handleMouseDown(t){this.clickTarget=t.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const t=this.selection==="multiple",e=this.getAllTreeItems();this.setAttribute("aria-multiselectable",t?"true":"false");for(const s of e)s.selectable=t;t&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(s=>Le(s,!0)))}get selectedItems(){const t=this.getAllTreeItems(),e=s=>s.selected;return t.filter(e)}getFocusableItems(){const t=this.getAllTreeItems(),e=new Set;return t.filter(s=>{var a;if(s.disabled)return!1;const r=(a=s.parentElement)==null?void 0:a.closest("[role=treeitem]");return r&&(!r.expanded||r.loading||e.has(r))&&e.add(s),!e.has(s)})}render(){return g`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};Ot.styles=[I,fs];i([k("slot:not([name])")],Ot.prototype,"defaultSlot",2);i([k("slot[name=expand-icon]")],Ot.prototype,"expandedIconSlot",2);i([k("slot[name=collapse-icon]")],Ot.prototype,"collapsedIconSlot",2);i([o()],Ot.prototype,"selection",2);i([x("selection")],Ot.prototype,"handleSelectionChange",1);Ot.define("sl-tree");Kt.define("sl-tree-item");var bs=A`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,vs=0,Qt=class extends ${constructor(){super(...arguments),this.attrId=++vs,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return g`
      <slot
        part="base"
        class=${T({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};Qt.styles=[I,bs];i([o({reflect:!0})],Qt.prototype,"name",2);i([o({type:Boolean,reflect:!0})],Qt.prototype,"active",2);i([x("active")],Qt.prototype,"handleActiveChange",1);Qt.define("sl-tab-panel");var ys=A`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,Tt=class extends ${constructor(){super(...arguments),this.localize=new R(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return g`
      <span
        part="base"
        class=${T({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?g`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};Tt.styles=[I,ys];Tt.dependencies={"sl-icon-button":Xt};i([o({reflect:!0})],Tt.prototype,"variant",2);i([o({reflect:!0})],Tt.prototype,"size",2);i([o({type:Boolean,reflect:!0})],Tt.prototype,"pill",2);i([o({type:Boolean})],Tt.prototype,"removable",2);Tt.define("sl-tag");var _s=A`
  :host {
    display: block;
  }

  .textarea {
    display: grid;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control,
  .textarea__size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .textarea__size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,F=class extends ${constructor(){super(...arguments),this.formControlController=new Mt(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new kt(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var t;super.disconnectedCallback(),this.input&&((t=this.resizeObserver)==null||t.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}setTextareaHeight(){this.resize==="auto"?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){typeof t.top=="number"&&(this.input.scrollTop=t.top),typeof t.left=="number"&&(this.input.scrollLeft=t.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,s="none"){this.input.setSelectionRange(t,e,s)}setRangeText(t,e,s,a="preserve"){const r=e??this.input.selectionStart,l=s??this.input.selectionEnd;this.input.setRangeText(t,r,l,a),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,a=this.helpText?!0:!!e;return g`
      <div
        part="form-control"
        class=${T({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":a})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${T({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${L(this.name)}
              .value=${Rt(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${L(this.placeholder)}
              rows=${L(this.rows)}
              minlength=${L(this.minlength)}
              maxlength=${L(this.maxlength)}
              autocapitalize=${L(this.autocapitalize)}
              autocorrect=${L(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${L(this.spellcheck)}
              enterkeyhint=${L(this.enterkeyhint)}
              inputmode=${L(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
            <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
            <div part="textarea-adjuster" class="textarea__size-adjuster" ?hidden=${this.resize!=="auto"}></div>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${a?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};F.styles=[I,Bt,_s];i([k(".textarea__control")],F.prototype,"input",2);i([k(".textarea__size-adjuster")],F.prototype,"sizeAdjuster",2);i([C()],F.prototype,"hasFocus",2);i([o()],F.prototype,"title",2);i([o()],F.prototype,"name",2);i([o()],F.prototype,"value",2);i([o({reflect:!0})],F.prototype,"size",2);i([o({type:Boolean,reflect:!0})],F.prototype,"filled",2);i([o()],F.prototype,"label",2);i([o({attribute:"help-text"})],F.prototype,"helpText",2);i([o()],F.prototype,"placeholder",2);i([o({type:Number})],F.prototype,"rows",2);i([o()],F.prototype,"resize",2);i([o({type:Boolean,reflect:!0})],F.prototype,"disabled",2);i([o({type:Boolean,reflect:!0})],F.prototype,"readonly",2);i([o({reflect:!0})],F.prototype,"form",2);i([o({type:Boolean,reflect:!0})],F.prototype,"required",2);i([o({type:Number})],F.prototype,"minlength",2);i([o({type:Number})],F.prototype,"maxlength",2);i([o()],F.prototype,"autocapitalize",2);i([o()],F.prototype,"autocorrect",2);i([o()],F.prototype,"autocomplete",2);i([o({type:Boolean})],F.prototype,"autofocus",2);i([o()],F.prototype,"enterkeyhint",2);i([o({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],F.prototype,"spellcheck",2);i([o()],F.prototype,"inputmode",2);i([Yt()],F.prototype,"defaultValue",2);i([x("disabled",{waitUntilFirstUpdate:!0})],F.prototype,"handleDisabledChange",1);i([x("rows",{waitUntilFirstUpdate:!0})],F.prototype,"handleRowsChange",1);i([x("value",{waitUntilFirstUpdate:!0})],F.prototype,"handleValueChange",1);F.define("sl-textarea");var xs=A`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) {
    color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,ws=0,gt=class extends ${constructor(){super(...arguments),this.localize=new R(this),this.attrId=++ws,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,g`
      <div
        part="base"
        class=${T({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?g`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};gt.styles=[I,xs];gt.dependencies={"sl-icon-button":Xt};i([k(".tab")],gt.prototype,"tab",2);i([o({reflect:!0})],gt.prototype,"panel",2);i([o({type:Boolean,reflect:!0})],gt.prototype,"active",2);i([o({type:Boolean,reflect:!0})],gt.prototype,"closable",2);i([o({type:Boolean,reflect:!0})],gt.prototype,"disabled",2);i([o({type:Number,reflect:!0})],gt.prototype,"tabIndex",2);i([x("active")],gt.prototype,"handleActiveChange",1);i([x("disabled")],gt.prototype,"handleDisabledChange",1);gt.define("sl-tab");var ks=A`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: hidden;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`,Cs=A`
  :host {
    display: contents;
  }
`,Zt=class extends ${constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.emit("sl-resize",{detail:{entries:t}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const t=this.shadowRoot.querySelector("slot");if(t!==null){const e=t.assignedElements({flatten:!0});this.observedElements.forEach(s=>this.resizeObserver.unobserve(s)),this.observedElements=[],e.forEach(s=>{this.resizeObserver.observe(s),this.observedElements.push(s)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return g` <slot @slotchange=${this.handleSlotChange}></slot> `}};Zt.styles=[I,Cs];i([o({type:Boolean,reflect:!0})],Zt.prototype,"disabled",2);i([x("disabled",{waitUntilFirstUpdate:!0})],Zt.prototype,"handleDisabledChange",1);var J=class extends ${constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new R(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const t=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{if(e.some(s=>!["aria-labelledby","aria-controls"].includes(s.attributeName))&&setTimeout(()=>this.setAriaLabels()),e.some(s=>s.attributeName==="disabled"))this.syncTabsAndPanels();else if(e.some(s=>s.attributeName==="active")){const a=e.filter(r=>r.attributeName==="active"&&r.target.tagName.toLowerCase()==="sl-tab").map(r=>r.target).find(r=>r.active);a&&this.setActiveTab(a)}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((s,a)=>{var r;s[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((r=this.getActiveTab())!=null?r:this.tabs[0],{emitEvents:!1}),a.unobserve(s[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var t,e;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect(),this.nav&&((e=this.resizeObserver)==null||e.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const s=t.target.closest("sl-tab");s?.closest("sl-tab-group")===this&&s!==null&&this.setActiveTab(s,{scrollBehavior:"smooth"})}handleKeyDown(t){const s=t.target.closest("sl-tab");if(s?.closest("sl-tab-group")===this&&(["Enter"," "].includes(t.key)&&s!==null&&(this.setActiveTab(s,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){const r=this.tabs.find(d=>d.matches(":focus")),l=this.localize.dir()==="rtl";let n=null;if(r?.tagName.toLowerCase()==="sl-tab"){if(t.key==="Home")n=this.focusableTabs[0];else if(t.key==="End")n=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(l?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"){const d=this.tabs.findIndex(c=>c===r);n=this.findNextFocusableTab(d,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(l?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown"){const d=this.tabs.findIndex(c=>c===r);n=this.findNextFocusableTab(d,"forward")}if(!n)return;n.tabIndex=0,n.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(n,{scrollBehavior:"smooth"}):this.tabs.forEach(d=>{d.tabIndex=d===n?0:-1}),["top","bottom"].includes(this.placement)&&_e(n,this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e=Je({emitEvents:!0,scrollBehavior:"auto"},e),t!==this.activeTab&&!t.disabled){const s=this.activeTab;this.activeTab=t,this.tabs.forEach(a=>{a.active=a===this.activeTab,a.tabIndex=a===this.activeTab?0:-1}),this.panels.forEach(a=>{var r;return a.active=a.name===((r=this.activeTab)==null?void 0:r.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&_e(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(s&&this.emit("sl-tab-hide",{detail:{name:s.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{const e=this.panels.find(s=>s.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){const t=this.getActiveTab();if(!t)return;const e=t.clientWidth,s=t.clientHeight,a=this.localize.dir()==="rtl",r=this.getAllTabs(),n=r.slice(0,r.indexOf(t)).reduce((d,c)=>({left:d.left+c.clientWidth,top:d.top+c.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${e}px`,this.indicator.style.height="auto",this.indicator.style.translate=a?`${-1*n.left}px`:`${n.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${s}px`,this.indicator.style.translate=`0 ${n.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(t,e){let s=null;const a=e==="forward"?1:-1;let r=t+a;for(;t<this.tabs.length;){if(s=this.tabs[r]||null,s===null){e==="forward"?s=this.focusableTabs[0]:s=this.focusableTabs[this.focusableTabs.length-1];break}if(!s.disabled)break;r+=a}return s}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){const e=this.tabs.find(s=>s.panel===t);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}render(){const t=this.localize.dir()==="rtl";return g`
      <div
        part="base"
        class=${T({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?g`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${T({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${t?"chevron-right":"chevron-left"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <sl-resize-observer @sl-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </sl-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls?g`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${T({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${t?"chevron-left":"chevron-right"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};J.styles=[I,ks];J.dependencies={"sl-icon-button":Xt,"sl-resize-observer":Zt};i([k(".tab-group")],J.prototype,"tabGroup",2);i([k(".tab-group__body")],J.prototype,"body",2);i([k(".tab-group__nav")],J.prototype,"nav",2);i([k(".tab-group__indicator")],J.prototype,"indicator",2);i([C()],J.prototype,"hasScrollControls",2);i([C()],J.prototype,"shouldHideScrollStartButton",2);i([C()],J.prototype,"shouldHideScrollEndButton",2);i([o()],J.prototype,"placement",2);i([o()],J.prototype,"activation",2);i([o({attribute:"no-scroll-controls",type:Boolean})],J.prototype,"noScrollControls",2);i([o({attribute:"fixed-scroll-controls",type:Boolean})],J.prototype,"fixedScrollControls",2);i([Gt({passive:!0})],J.prototype,"updateScrollButtons",1);i([x("noScrollControls",{waitUntilFirstUpdate:!0})],J.prototype,"updateScrollControls",1);i([x("placement",{waitUntilFirstUpdate:!0})],J.prototype,"syncIndicator",1);J.define("sl-tab-group");Ce.define("sl-spinner");var $s=A`
  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;function jt(t,e){function s(r){const l=t.getBoundingClientRect(),n=t.ownerDocument.defaultView,d=l.left+n.scrollX,c=l.top+n.scrollY,p=r.pageX-d,y=r.pageY-c;e?.onMove&&e.onMove(p,y)}function a(){document.removeEventListener("pointermove",s),document.removeEventListener("pointerup",a),e?.onStop&&e.onStop()}document.addEventListener("pointermove",s,{passive:!0}),document.addEventListener("pointerup",a),e?.initialEvent instanceof PointerEvent&&s(e.initialEvent)}var Me=()=>null,ct=class extends ${constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new R(this),this.positionBeforeCollapsing=0,this.position=50,this.vertical=!1,this.disabled=!1,this.snapValue="",this.snapFunction=Me,this.snapThreshold=12}toSnapFunction(t){const e=t.split(" ");return({pos:s,size:a,snapThreshold:r,isRtl:l,vertical:n})=>{let d=s,c=Number.POSITIVE_INFINITY;return e.forEach(p=>{let y;if(p.startsWith("repeat(")){const u=t.substring(7,t.length-1),b=u.endsWith("%"),f=Number.parseFloat(u),_=b?a*(f/100):f;y=Math.round((l&&!n?a-s:s)/_)*_}else p.endsWith("%")?y=a*(Number.parseFloat(p)/100):y=Number.parseFloat(p);l&&!n&&(y=a-y);const h=Math.abs(s-y);h<=r&&h<c&&(d=y,c=h)}),d}}set snap(t){this.snapValue=t??"",t?this.snapFunction=typeof t=="string"?this.toSnapFunction(t):t:this.snapFunction=Me}get snap(){return this.snapValue}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>this.handleResize(t)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.resizeObserver)==null||t.unobserve(this)}detectSize(){const{width:t,height:e}=this.getBoundingClientRect();this.size=this.vertical?e:t}percentageToPixels(t){return this.size*(t/100)}pixelsToPercentage(t){return t/this.size*100}handleDrag(t){const e=this.localize.dir()==="rtl";this.disabled||(t.cancelable&&t.preventDefault(),jt(this,{onMove:(s,a)=>{var r;let l=this.vertical?a:s;this.primary==="end"&&(l=this.size-l),l=(r=this.snapFunction({pos:l,size:this.size,snapThreshold:this.snapThreshold,isRtl:e,vertical:this.vertical}))!=null?r:l,this.position=Y(this.pixelsToPercentage(l),0,100)},initialEvent:t}))}handleKeyDown(t){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(t.key)){let e=this.position;const s=(t.shiftKey?10:1)*(this.primary==="end"?-1:1);if(t.preventDefault(),(t.key==="ArrowLeft"&&!this.vertical||t.key==="ArrowUp"&&this.vertical)&&(e-=s),(t.key==="ArrowRight"&&!this.vertical||t.key==="ArrowDown"&&this.vertical)&&(e+=s),t.key==="Home"&&(e=this.primary==="end"?100:0),t.key==="End"&&(e=this.primary==="end"?0:100),t.key==="Enter")if(this.isCollapsed)e=this.positionBeforeCollapsing,this.isCollapsed=!1;else{const a=this.position;e=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=a})}this.position=Y(e,0,100)}}handleResize(t){const{width:e,height:s}=t[0].contentRect;this.size=this.vertical?s:e,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const t=this.vertical?"gridTemplateRows":"gridTemplateColumns",e=this.vertical?"gridTemplateColumns":"gridTemplateRows",s=this.localize.dir()==="rtl",a=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,r="auto";return this.primary==="end"?s&&!this.vertical?this.style[t]=`${a} var(--divider-width) ${r}`:this.style[t]=`${r} var(--divider-width) ${a}`:s&&!this.vertical?this.style[t]=`${r} var(--divider-width) ${a}`:this.style[t]=`${a} var(--divider-width) ${r}`,this.style[e]="",g`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${L(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};ct.styles=[I,$s];i([k(".divider")],ct.prototype,"divider",2);i([o({type:Number,reflect:!0})],ct.prototype,"position",2);i([o({attribute:"position-in-pixels",type:Number})],ct.prototype,"positionInPixels",2);i([o({type:Boolean,reflect:!0})],ct.prototype,"vertical",2);i([o({type:Boolean,reflect:!0})],ct.prototype,"disabled",2);i([o()],ct.prototype,"primary",2);i([o({reflect:!0})],ct.prototype,"snap",1);i([o({type:Number,attribute:"snap-threshold"})],ct.prototype,"snapThreshold",2);i([x("position")],ct.prototype,"handlePositionChange",1);i([x("positionInPixels")],ct.prototype,"handlePositionInPixelsChange",1);i([x("vertical")],ct.prototype,"handleVerticalChange",1);ct.define("sl-split-panel");Zt.define("sl-resize-observer");var Ss=A`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let we=class extends $e{constructor(e){if(super(e),this.it=ce,e.type!==Se.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===ce||e==null)return this._t=void 0,this.it=e;if(e===Ue)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const s=[e];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}};we.directiveName="unsafeHTML",we.resultType=1;const le=ze(we);var O=class extends ${constructor(){super(...arguments),this.formControlController=new Mt(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new kt(this,"help-text","label"),this.localize=new R(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>g`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${e=>this.handleTagRemove(e,t)}
      >
        ${t.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const e=t.target,s=e.closest(".select__clear")!==null,a=e.closest("sl-icon-button")!==null;if(!(s||a)){if(t.key==="Escape"&&this.open&&!this.closeWatcher&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const r=this.getAllOptions(),l=r.indexOf(this.currentOption);let n=Math.max(0,l);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(n=l+1,n>r.length-1&&(n=0)):t.key==="ArrowUp"?(n=l-1,n<0&&(n=r.length-1)):t.key==="Home"?n=0:t.key==="End"&&(n=r.length-1),this.setCurrentOption(r[n])}if(t.key&&t.key.length===1||t.key==="Backspace"){const r=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const l of r)if(l.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(l);break}}}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}get value(){return this._value}set value(t){this.multiple?t=Array.isArray(t)?t:t.split(" "):t=Array.isArray(t)?t.join(" "):t,this._value!==t&&(this.valueHasChanged=!0,this._value=t)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var t;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var t;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(t=this.closeWatcher)==null||t.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){const s=t.composedPath().some(a=>a instanceof Element&&a.tagName.toLowerCase()==="sl-icon-button");this.disabled||s||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.key!=="Tab"&&(t.stopPropagation(),this.handleDocumentKeyDown(t))}handleClearClick(t){t.stopPropagation(),this.valueHasChanged=!0,this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const s=t.target.closest("sl-option"),a=this.value;s&&!s.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(s):this.setSelectedOptions(s),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==a&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());const t=this.getAllOptions(),e=this.valueHasChanged?this.value:this.defaultValue,s=Array.isArray(e)?e:[e],a=[];t.forEach(r=>a.push(r.value)),this.setSelectedOptions(t.filter(r=>s.includes(r.value)))}handleTagRemove(t,e){t.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(e,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(t){this.getAllOptions().forEach(s=>{s.current=!1,s.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){const e=this.getAllOptions(),s=Array.isArray(t)?t:[t];e.forEach(a=>a.selected=!1),s.length&&s.forEach(a=>a.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){e===!0||e===!1?t.selected=e:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){var t,e,s;const a=this.getAllOptions();this.selectedOptions=a.filter(l=>l.selected);const r=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(l=>l.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const l=this.selectedOptions[0];this.value=(t=l?.value)!=null?t:"",this.displayLabel=(s=(e=l?.getTextLabel)==null?void 0:e.call(l))!=null?s:""}this.valueHasChanged=r,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const s=this.getTag(t,e);return g`<div @sl-remove=${a=>this.handleTagRemove(a,t)}>
          ${typeof s=="string"?le(s):s}
        </div>`}else if(e===this.maxOptionsVisible)return g`<sl-tag size=${this.size}>+${this.selectedOptions.length-e}</sl-tag>`;return g``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(t,e,s){if(super.attributeChangedCallback(t,e,s),t==="value"){const a=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=a}}handleValueChange(){if(!this.valueHasChanged){const s=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=s}const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(s=>e.includes(s.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await ft(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:t,options:e}=at(this,"select.show",{dir:this.localize.dir()});await nt(this.popup.popup,t,e),this.currentOption&&_e(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await ft(this);const{keyframes:t,options:e}=at(this,"select.hide",{dir:this.localize.dir()});await nt(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,At(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,At(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,a=this.helpText?!0:!!e,r=this.clearable&&!this.disabled&&this.value.length>0,l=this.placeholder&&this.value&&this.value.length<=0;return g`
      <div
        part="form-control"
        class=${T({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":a})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${s?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${T({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":l,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?g`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${r?g`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${a?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};O.styles=[I,Bt,Ss];O.dependencies={"sl-icon":st,"sl-popup":he,"sl-tag":Tt};i([k(".select")],O.prototype,"popup",2);i([k(".select__combobox")],O.prototype,"combobox",2);i([k(".select__display-input")],O.prototype,"displayInput",2);i([k(".select__value-input")],O.prototype,"valueInput",2);i([k(".select__listbox")],O.prototype,"listbox",2);i([C()],O.prototype,"hasFocus",2);i([C()],O.prototype,"displayLabel",2);i([C()],O.prototype,"currentOption",2);i([C()],O.prototype,"selectedOptions",2);i([C()],O.prototype,"valueHasChanged",2);i([o()],O.prototype,"name",2);i([C()],O.prototype,"value",1);i([o({attribute:"value"})],O.prototype,"defaultValue",2);i([o({reflect:!0})],O.prototype,"size",2);i([o()],O.prototype,"placeholder",2);i([o({type:Boolean,reflect:!0})],O.prototype,"multiple",2);i([o({attribute:"max-options-visible",type:Number})],O.prototype,"maxOptionsVisible",2);i([o({type:Boolean,reflect:!0})],O.prototype,"disabled",2);i([o({type:Boolean})],O.prototype,"clearable",2);i([o({type:Boolean,reflect:!0})],O.prototype,"open",2);i([o({type:Boolean})],O.prototype,"hoist",2);i([o({type:Boolean,reflect:!0})],O.prototype,"filled",2);i([o({type:Boolean,reflect:!0})],O.prototype,"pill",2);i([o()],O.prototype,"label",2);i([o({reflect:!0})],O.prototype,"placement",2);i([o({attribute:"help-text"})],O.prototype,"helpText",2);i([o({reflect:!0})],O.prototype,"form",2);i([o({type:Boolean,reflect:!0})],O.prototype,"required",2);i([o()],O.prototype,"getTag",2);i([x("disabled",{waitUntilFirstUpdate:!0})],O.prototype,"handleDisabledChange",1);i([x(["defaultValue","value"],{waitUntilFirstUpdate:!0})],O.prototype,"handleValueChange",1);i([x("open",{waitUntilFirstUpdate:!0})],O.prototype,"handleOpenChange",1);W("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});W("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});O.define("sl-select");var zs=A`
  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,Ie=class extends ${constructor(){super(...arguments),this.effect="none"}render(){return g`
      <div
        part="base"
        class=${T({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};Ie.styles=[I,zs];i([o()],Ie.prototype,"effect",2);Ie.define("sl-skeleton");var As=A`
  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,N=class extends ${constructor(){super(...arguments),this.formControlController=new Mt(this),this.hasSlotController=new kt(this,"help-text","label"),this.localize=new R(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=t=>t.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.resizeObserver)==null||t.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(t){this.input.style.setProperty("--percent",`${t*100}%`)}syncTooltip(t){if(this.output!==null){const e=this.input.offsetWidth,s=this.output.offsetWidth,a=getComputedStyle(this.input).getPropertyValue("--thumb-size"),r=this.localize.dir()==="rtl",l=e*t;if(r){const n=`${e-l}px + ${t} * ${a}`;this.output.style.translate=`calc((${n} - ${s/2}px - ${a} / 2))`}else{const n=`${l}px - ${t} * ${a}`;this.output.style.translate=`calc(${n} - ${s/2}px + ${a} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const t=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(t),this.tooltip!=="none"&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(t))}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}focus(t){this.input.focus(t)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,a=this.helpText?!0:!!e;return g`
      <div
        part="form-control"
        class=${T({"form-control":!0,"form-control--medium":!0,"form-control--has-label":s,"form-control--has-help-text":a})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${T({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${L(this.name)}
              ?disabled=${this.disabled}
              min=${L(this.min)}
              max=${L(this.max)}
              step=${L(this.step)}
              .value=${Rt(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?g`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter=="function"?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${a?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};N.styles=[I,Bt,As];i([k(".range__control")],N.prototype,"input",2);i([k(".range__tooltip")],N.prototype,"output",2);i([C()],N.prototype,"hasFocus",2);i([C()],N.prototype,"hasTooltip",2);i([o()],N.prototype,"title",2);i([o()],N.prototype,"name",2);i([o({type:Number})],N.prototype,"value",2);i([o()],N.prototype,"label",2);i([o({attribute:"help-text"})],N.prototype,"helpText",2);i([o({type:Boolean,reflect:!0})],N.prototype,"disabled",2);i([o({type:Number})],N.prototype,"min",2);i([o({type:Number})],N.prototype,"max",2);i([o({type:Number})],N.prototype,"step",2);i([o()],N.prototype,"tooltip",2);i([o({attribute:!1})],N.prototype,"tooltipFormatter",2);i([o({reflect:!0})],N.prototype,"form",2);i([Yt()],N.prototype,"defaultValue",2);i([Gt({passive:!0})],N.prototype,"handleThumbDragStart",1);i([x("value",{waitUntilFirstUpdate:!0})],N.prototype,"handleValueChange",1);i([x("disabled",{waitUntilFirstUpdate:!0})],N.prototype,"handleDisabledChange",1);i([x("hasTooltip",{waitUntilFirstUpdate:!0})],N.prototype,"syncRange",1);N.define("sl-range");var Is=A`
  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
    pointer-events: none;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qe="important",Ts=" !"+qe,rt=ze(class extends $e{constructor(t){if(super(t),t.type!==Se.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,s)=>{const a=t[s];return a==null?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${a};`},"")}update(t,[e]){const{style:s}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const a of this.ft)e[a]==null&&(this.ft.delete(a),a.includes("-")?s.removeProperty(a):s[a]=null);for(const a in e){const r=e[a];if(r!=null){this.ft.add(a);const l=typeof r=="string"&&r.endsWith(Ts);a.includes("-")||l?s.setProperty(a,l?r.slice(0,-11):r,l?qe:""):s[a]=r}}return Ue}});var it=class extends ${constructor(){super(...arguments),this.localize=new R(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(t){return this.getValueFromXCoordinate(t.clientX)}getValueFromTouchPosition(t){return this.getValueFromXCoordinate(t.touches[0].clientX)}getValueFromXCoordinate(t){const e=this.localize.dir()==="rtl",{left:s,right:a,width:r}=this.rating.getBoundingClientRect(),l=e?this.roundToPrecision((a-t)/r*this.max,this.precision):this.roundToPrecision((t-s)/r*this.max,this.precision);return Y(l,0,this.max)}handleClick(t){this.disabled||(this.setValue(this.getValueFromMousePosition(t)),this.emit("sl-change"))}setValue(t){this.disabled||this.readonly||(this.value=t===this.value?0:t,this.isHovering=!1)}handleKeyDown(t){const e=this.localize.dir()==="ltr",s=this.localize.dir()==="rtl",a=this.value;if(!(this.disabled||this.readonly)){if(t.key==="ArrowDown"||e&&t.key==="ArrowLeft"||s&&t.key==="ArrowRight"){const r=t.shiftKey?1:this.precision;this.value=Math.max(0,this.value-r),t.preventDefault()}if(t.key==="ArrowUp"||e&&t.key==="ArrowRight"||s&&t.key==="ArrowLeft"){const r=t.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+r),t.preventDefault()}t.key==="Home"&&(this.value=0,t.preventDefault()),t.key==="End"&&(this.value=this.max,t.preventDefault()),this.value!==a&&this.emit("sl-change")}}handleMouseEnter(t){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(t)}handleMouseMove(t){this.hoverValue=this.getValueFromMousePosition(t)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(t){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(t),t.preventDefault()}handleTouchMove(t){this.hoverValue=this.getValueFromTouchPosition(t)}handleTouchEnd(t){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),t.preventDefault()}roundToPrecision(t,e=.5){const s=1/e;return Math.ceil(t*s)/s}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(t){this.rating.focus(t)}blur(){this.rating.blur()}render(){const t=this.localize.dir()==="rtl",e=Array.from(Array(this.max).keys());let s=0;return this.disabled||this.readonly?s=this.value:s=this.isHovering?this.hoverValue:this.value,g`
      <div
        part="base"
        class=${T({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":t})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled||this.readonly?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${e.map(a=>s>a&&s<a+1?g`
                <span
                  class=${T({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(s)===a+1})}
                  role="presentation"
                >
                  <div
                    style=${rt({clipPath:t?`inset(0 ${(s-a)*100}% 0 0)`:`inset(0 0 0 ${(s-a)*100}%)`})}
                  >
                    ${le(this.getSymbol(a+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${rt({clipPath:t?`inset(0 0 0 ${100-(s-a)*100}%)`:`inset(0 ${100-(s-a)*100}% 0 0)`})}
                  >
                    ${le(this.getSymbol(a+1))}
                  </div>
                </span>
              `:g`
              <span
                class=${T({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(s)===a+1,"rating__symbol--active":s>=a+1})}
                role="presentation"
              >
                ${le(this.getSymbol(a+1))}
              </span>
            `)}
        </span>
      </div>
    `}};it.styles=[I,Is];it.dependencies={"sl-icon":st};i([k(".rating")],it.prototype,"rating",2);i([C()],it.prototype,"hoverValue",2);i([C()],it.prototype,"isHovering",2);i([o()],it.prototype,"label",2);i([o({type:Number})],it.prototype,"value",2);i([o({type:Number})],it.prototype,"max",2);i([o({type:Number})],it.prototype,"precision",2);i([o({type:Boolean,reflect:!0})],it.prototype,"readonly",2);i([o({type:Boolean,reflect:!0})],it.prototype,"disabled",2);i([o()],it.prototype,"getSymbol",2);i([Gt({passive:!0})],it.prototype,"handleTouchMove",1);i([x("hoverValue")],it.prototype,"handleHoverValueChange",1);i([x("isHovering")],it.prototype,"handleIsHoveringChange",1);it.define("sl-rating");var Es=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],Vt=class extends ${constructor(){super(...arguments),this.localize=new R(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const t=new Date,e=new Date(this.date);if(isNaN(e.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const s=e.getTime()-t.getTime(),{unit:a,value:r}=Es.find(l=>Math.abs(s)<l.max);if(this.isoTime=e.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(s/r),a,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let l;a==="minute"?l=ie("second"):a==="hour"?l=ie("minute"):a==="day"?l=ie("hour"):l=ie("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),l)}return g` <time datetime=${this.isoTime}>${this.relativeTime}</time> `}};i([C()],Vt.prototype,"isoTime",2);i([C()],Vt.prototype,"relativeTime",2);i([o()],Vt.prototype,"date",2);i([o()],Vt.prototype,"format",2);i([o()],Vt.prototype,"numeric",2);i([o({type:Boolean})],Vt.prototype,"sync",2);function ie(t){const s={second:1e3,minute:6e4,hour:36e5,day:864e5}[t];return s-Date.now()%s}Vt.define("sl-relative-time");var Ds=A`
  ${ts}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,bt=class extends ${constructor(){super(...arguments),this.hasSlotController=new kt(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(t){if(this.disabled){t.preventDefault(),t.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){return es`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${T({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${L(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};bt.styles=[I,Ds];i([k(".button")],bt.prototype,"input",2);i([k(".hidden-input")],bt.prototype,"hiddenInput",2);i([C()],bt.prototype,"hasFocus",2);i([o({type:Boolean,reflect:!0})],bt.prototype,"checked",2);i([o()],bt.prototype,"value",2);i([o({type:Boolean,reflect:!0})],bt.prototype,"disabled",2);i([o({reflect:!0})],bt.prototype,"size",2);i([o({type:Boolean,reflect:!0})],bt.prototype,"pill",2);i([x("disabled",{waitUntilFirstUpdate:!0})],bt.prototype,"handleDisabledChange",1);bt.define("sl-radio-button");var Ls=A`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,Ms=A`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Pt=class extends ${constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(t){const e=qt(t.target);e?.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(t){const e=qt(t.target);e?.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(t){const e=qt(t.target);e?.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(t){const e=qt(t.target);e?.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{const s=t.indexOf(e),a=qt(e);a&&(a.toggleAttribute("data-sl-button-group__button",!0),a.toggleAttribute("data-sl-button-group__button--first",s===0),a.toggleAttribute("data-sl-button-group__button--inner",s>0&&s<t.length-1),a.toggleAttribute("data-sl-button-group__button--last",s===t.length-1),a.toggleAttribute("data-sl-button-group__button--radio",a.tagName.toLowerCase()==="sl-radio-button"))})}render(){return g`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};Pt.styles=[I,Ms];i([k("slot")],Pt.prototype,"defaultSlot",2);i([C()],Pt.prototype,"disableRole",2);i([o()],Pt.prototype,"label",2);function qt(t){var e;const s="sl-button, sl-radio-button";return(e=t.closest(s))!=null?e:t.querySelector(s)}var tt=class extends ${constructor(){super(...arguments),this.formControlController=new Mt(this),this.hasSlotController=new kt(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const t=this.required&&!this.value;return this.customValidityMessage!==""?ss:t?is:as}get validationMessage(){const t=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(t){const e=t.target.closest("sl-radio, sl-radio-button"),s=this.getAllRadios(),a=this.value;!e||e.disabled||(this.value=e.value,s.forEach(r=>r.checked=r===e),this.value!==a&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(t){var e;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;const s=this.getAllRadios().filter(d=>!d.disabled),a=(e=s.find(d=>d.checked))!=null?e:s[0],r=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,l=this.value;let n=s.indexOf(a)+r;n<0&&(n=s.length-1),n>s.length-1&&(n=0),this.getAllRadios().forEach(d=>{d.checked=!1,this.hasButtonGroup||d.setAttribute("tabindex","-1")}),this.value=s[n].value,s[n].checked=!0,this.hasButtonGroup?s[n].shadowRoot.querySelector("button").focus():(s[n].setAttribute("tabindex","0"),s[n].focus()),this.value!==l&&(this.emit("sl-change"),this.emit("sl-input")),t.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){var t,e;const s=this.getAllRadios();if(await Promise.all(s.map(async a=>{await a.updateComplete,a.checked=a.value===this.value,a.size=this.size})),this.hasButtonGroup=s.some(a=>a.tagName.toLowerCase()==="sl-radio-button"),s.length>0&&!s.some(a=>a.checked))if(this.hasButtonGroup){const a=(t=s[0].shadowRoot)==null?void 0:t.querySelector("button");a&&a.setAttribute("tabindex","0")}else s[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const a=(e=this.shadowRoot)==null?void 0:e.querySelector("sl-button-group");a&&(a.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(e=>e.checked=e.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const t=this.required&&!this.value,e=this.customValidityMessage!=="";return t||e?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){const e=this.getAllRadios(),s=e.find(l=>l.checked),a=e.find(l=>!l.disabled),r=s||a;r&&r.focus(t)}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,a=this.helpText?!0:!!e,r=g`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return g`
      <fieldset
        part="form-control"
        class=${T({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":s,"form-control--has-help-text":a})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${s?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?g`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${r}
                </sl-button-group>
              `:r}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${a?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};tt.styles=[I,Bt,Ls];tt.dependencies={"sl-button-group":Pt};i([k("slot:not([name])")],tt.prototype,"defaultSlot",2);i([k(".radio-group__validation-input")],tt.prototype,"validationInput",2);i([C()],tt.prototype,"hasButtonGroup",2);i([C()],tt.prototype,"errorMessage",2);i([C()],tt.prototype,"defaultValue",2);i([o()],tt.prototype,"label",2);i([o({attribute:"help-text"})],tt.prototype,"helpText",2);i([o()],tt.prototype,"name",2);i([o({reflect:!0})],tt.prototype,"value",2);i([o({reflect:!0})],tt.prototype,"size",2);i([o({reflect:!0})],tt.prototype,"form",2);i([o({type:Boolean,reflect:!0})],tt.prototype,"required",2);i([x("size",{waitUntilFirstUpdate:!0})],tt.prototype,"handleSizeChange",1);i([x("value")],tt.prototype,"handleValueChange",1);tt.define("sl-radio-group");var Os=A`
  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`,Ht=class extends ${constructor(){super(...arguments),this.localize=new R(this),this.value=0,this.label=""}updated(t){if(super.updated(t),t.has("value")){const e=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),s=2*Math.PI*e,a=s-this.value/100*s;this.indicatorOffset=`${a}px`}}render(){return g`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};Ht.styles=[I,Os];i([k(".progress-ring__indicator")],Ht.prototype,"indicator",2);i([C()],Ht.prototype,"indicatorOffset",2);i([o({type:Number,reflect:!0})],Ht.prototype,"value",2);i([o()],Ht.prototype,"label",2);Ht.define("sl-progress-ring");var Vs=A`
  :host {
    display: inline-block;
  }
`;let Ke=null;class je{}je.render=function(t,e){Ke(t,e)};self.QrCreator=je;(function(t){function e(d,c,p,y){var h={},u=t(p,c);u.u(d),u.J(),y=y||0;var b=u.h(),f=u.h()+2*y;return h.text=d,h.level=c,h.version=p,h.O=f,h.a=function(_,P){return _-=y,P-=y,0>_||_>=b||0>P||P>=b?!1:u.a(_,P)},h}function s(d,c,p,y,h,u,b,f,_,P){function U(w,S,m,v,E,B,H){w?(d.lineTo(S+B,m+H),d.arcTo(S,m,v,E,u)):d.lineTo(S,m)}b?d.moveTo(c+u,p):d.moveTo(c,p),U(f,y,p,y,h,-u,0),U(_,y,h,c,h,0,-u),U(P,c,h,c,p,u,0),U(b,c,p,y,p,0,u)}function a(d,c,p,y,h,u,b,f,_,P){function U(w,S,m,v){d.moveTo(w+m,S),d.lineTo(w,S),d.lineTo(w,S+v),d.arcTo(w,S,w+m,S,u)}b&&U(c,p,u,u),f&&U(y,p,-u,u),_&&U(y,h,-u,-u),P&&U(c,h,u,-u)}function r(d,c){var p=c.fill;if(typeof p=="string")d.fillStyle=p;else{var y=p.type,h=p.colorStops;if(p=p.position.map(b=>Math.round(b*c.size)),y==="linear-gradient")var u=d.createLinearGradient.apply(d,p);else if(y==="radial-gradient")u=d.createRadialGradient.apply(d,p);else throw Error("Unsupported fill");h.forEach(([b,f])=>{u.addColorStop(b,f)}),d.fillStyle=u}}function l(d,c){t:{var p=c.text,y=c.v,h=c.N,u=c.K,b=c.P;for(h=Math.max(1,h||1),u=Math.min(40,u||40);h<=u;h+=1)try{var f=e(p,y,h,b);break t}catch{}f=void 0}if(!f)return null;for(p=d.getContext("2d"),c.background&&(p.fillStyle=c.background,p.fillRect(c.left,c.top,c.size,c.size)),y=f.O,u=c.size/y,p.beginPath(),b=0;b<y;b+=1)for(h=0;h<y;h+=1){var _=p,P=c.left+h*u,U=c.top+b*u,w=b,S=h,m=f.a,v=P+u,E=U+u,B=w-1,H=w+1,M=S-1,z=S+1,wt=Math.floor(Math.min(.5,Math.max(0,c.R))*u),zt=m(w,S),Dt=m(B,M),ee=m(B,S);B=m(B,z);var se=m(w,z);z=m(H,z),S=m(H,S),H=m(H,M),w=m(w,M),P=Math.round(P),U=Math.round(U),v=Math.round(v),E=Math.round(E),zt?s(_,P,U,v,E,wt,!ee&&!w,!ee&&!se,!S&&!se,!S&&!w):a(_,P,U,v,E,wt,ee&&w&&Dt,ee&&se&&B,S&&se&&z,S&&w&&H)}return r(p,c),p.fill(),d}var n={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};Ke=function(d,c){var p={};Object.assign(p,n,d),p.N=p.minVersion,p.K=p.maxVersion,p.v=p.ecLevel,p.left=p.left,p.top=p.top,p.size=p.size,p.fill=p.fill,p.background=p.background,p.text=p.text,p.R=p.radius,p.P=p.quiet,c instanceof HTMLCanvasElement?((c.width!==p.size||c.height!==p.size)&&(c.width=p.size,c.height=p.size),c.getContext("2d").clearRect(0,0,c.width,c.height),l(c,p)):(d=document.createElement("canvas"),d.width=p.size,d.height=p.size,p=l(d,p),c.appendChild(p))}})(function(){function t(c){var p=s.s(c);return{S:function(){return 4},b:function(){return p.length},write:function(y){for(var h=0;h<p.length;h+=1)y.put(p[h],8)}}}function e(){var c=[],p=0,y={B:function(){return c},c:function(h){return(c[Math.floor(h/8)]>>>7-h%8&1)==1},put:function(h,u){for(var b=0;b<u;b+=1)y.m((h>>>u-b-1&1)==1)},f:function(){return p},m:function(h){var u=Math.floor(p/8);c.length<=u&&c.push(0),h&&(c[u]|=128>>>p%8),p+=1}};return y}function s(c,p){function y(w,S){for(var m=-1;7>=m;m+=1)if(!(-1>=w+m||f<=w+m))for(var v=-1;7>=v;v+=1)-1>=S+v||f<=S+v||(b[w+m][S+v]=0<=m&&6>=m&&(v==0||v==6)||0<=v&&6>=v&&(m==0||m==6)||2<=m&&4>=m&&2<=v&&4>=v)}function h(w,S){for(var m=f=4*c+17,v=Array(m),E=0;E<m;E+=1){v[E]=Array(m);for(var B=0;B<m;B+=1)v[E][B]=null}for(b=v,y(0,0),y(f-7,0),y(0,f-7),m=l.G(c),v=0;v<m.length;v+=1)for(E=0;E<m.length;E+=1){B=m[v];var H=m[E];if(b[B][H]==null)for(var M=-2;2>=M;M+=1)for(var z=-2;2>=z;z+=1)b[B+M][H+z]=M==-2||M==2||z==-2||z==2||M==0&&z==0}for(m=8;m<f-8;m+=1)b[m][6]==null&&(b[m][6]=m%2==0);for(m=8;m<f-8;m+=1)b[6][m]==null&&(b[6][m]=m%2==0);for(m=l.w(u<<3|S),v=0;15>v;v+=1)E=!w&&(m>>v&1)==1,b[6>v?v:8>v?v+1:f-15+v][8]=E,b[8][8>v?f-v-1:9>v?15-v:14-v]=E;if(b[f-8][8]=!w,7<=c){for(m=l.A(c),v=0;18>v;v+=1)E=!w&&(m>>v&1)==1,b[Math.floor(v/3)][v%3+f-8-3]=E;for(v=0;18>v;v+=1)E=!w&&(m>>v&1)==1,b[v%3+f-8-3][Math.floor(v/3)]=E}if(_==null){for(w=d.I(c,u),m=e(),v=0;v<P.length;v+=1)E=P[v],m.put(4,4),m.put(E.b(),l.f(4,c)),E.write(m);for(v=E=0;v<w.length;v+=1)E+=w[v].j;if(m.f()>8*E)throw Error("code length overflow. ("+m.f()+">"+8*E+")");for(m.f()+4<=8*E&&m.put(0,4);m.f()%8!=0;)m.m(!1);for(;!(m.f()>=8*E)&&(m.put(236,8),!(m.f()>=8*E));)m.put(17,8);var wt=0;for(E=v=0,B=Array(w.length),H=Array(w.length),M=0;M<w.length;M+=1){var zt=w[M].j,Dt=w[M].o-zt;for(v=Math.max(v,zt),E=Math.max(E,Dt),B[M]=Array(zt),z=0;z<B[M].length;z+=1)B[M][z]=255&m.B()[z+wt];for(wt+=zt,z=l.C(Dt),zt=a(B[M],z.b()-1).l(z),H[M]=Array(z.b()-1),z=0;z<H[M].length;z+=1)Dt=z+zt.b()-H[M].length,H[M][z]=0<=Dt?zt.c(Dt):0}for(z=m=0;z<w.length;z+=1)m+=w[z].o;for(m=Array(m),z=wt=0;z<v;z+=1)for(M=0;M<w.length;M+=1)z<B[M].length&&(m[wt]=B[M][z],wt+=1);for(z=0;z<E;z+=1)for(M=0;M<w.length;M+=1)z<H[M].length&&(m[wt]=H[M][z],wt+=1);_=m}for(w=_,m=-1,v=f-1,E=7,B=0,S=l.F(S),H=f-1;0<H;H-=2)for(H==6&&--H;;){for(M=0;2>M;M+=1)b[v][H-M]==null&&(z=!1,B<w.length&&(z=(w[B]>>>E&1)==1),S(v,H-M)&&(z=!z),b[v][H-M]=z,--E,E==-1&&(B+=1,E=7));if(v+=m,0>v||f<=v){v-=m,m=-m;break}}}var u=r[p],b=null,f=0,_=null,P=[],U={u:function(w){w=t(w),P.push(w),_=null},a:function(w,S){if(0>w||f<=w||0>S||f<=S)throw Error(w+","+S);return b[w][S]},h:function(){return f},J:function(){for(var w=0,S=0,m=0;8>m;m+=1){h(!0,m);var v=l.D(U);(m==0||w>v)&&(w=v,S=m)}h(!1,S)}};return U}function a(c,p){if(typeof c.length>"u")throw Error(c.length+"/"+p);var y=function(){for(var u=0;u<c.length&&c[u]==0;)u+=1;for(var b=Array(c.length-u+p),f=0;f<c.length-u;f+=1)b[f]=c[f+u];return b}(),h={c:function(u){return y[u]},b:function(){return y.length},multiply:function(u){for(var b=Array(h.b()+u.b()-1),f=0;f<h.b();f+=1)for(var _=0;_<u.b();_+=1)b[f+_]^=n.i(n.g(h.c(f))+n.g(u.c(_)));return a(b,0)},l:function(u){if(0>h.b()-u.b())return h;for(var b=n.g(h.c(0))-n.g(u.c(0)),f=Array(h.b()),_=0;_<h.b();_+=1)f[_]=h.c(_);for(_=0;_<u.b();_+=1)f[_]^=n.i(n.g(u.c(_))+b);return a(f,0).l(u)}};return h}s.s=function(c){for(var p=[],y=0;y<c.length;y++){var h=c.charCodeAt(y);128>h?p.push(h):2048>h?p.push(192|h>>6,128|h&63):55296>h||57344<=h?p.push(224|h>>12,128|h>>6&63,128|h&63):(y++,h=65536+((h&1023)<<10|c.charCodeAt(y)&1023),p.push(240|h>>18,128|h>>12&63,128|h>>6&63,128|h&63))}return p};var r={L:1,M:0,Q:3,H:2},l=function(){function c(h){for(var u=0;h!=0;)u+=1,h>>>=1;return u}var p=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],y={w:function(h){for(var u=h<<10;0<=c(u)-c(1335);)u^=1335<<c(u)-c(1335);return(h<<10|u)^21522},A:function(h){for(var u=h<<12;0<=c(u)-c(7973);)u^=7973<<c(u)-c(7973);return h<<12|u},G:function(h){return p[h-1]},F:function(h){switch(h){case 0:return function(u,b){return(u+b)%2==0};case 1:return function(u){return u%2==0};case 2:return function(u,b){return b%3==0};case 3:return function(u,b){return(u+b)%3==0};case 4:return function(u,b){return(Math.floor(u/2)+Math.floor(b/3))%2==0};case 5:return function(u,b){return u*b%2+u*b%3==0};case 6:return function(u,b){return(u*b%2+u*b%3)%2==0};case 7:return function(u,b){return(u*b%3+(u+b)%2)%2==0};default:throw Error("bad maskPattern:"+h)}},C:function(h){for(var u=a([1],0),b=0;b<h;b+=1)u=u.multiply(a([1,n.i(b)],0));return u},f:function(h,u){if(h!=4||1>u||40<u)throw Error("mode: "+h+"; type: "+u);return 10>u?8:16},D:function(h){for(var u=h.h(),b=0,f=0;f<u;f+=1)for(var _=0;_<u;_+=1){for(var P=0,U=h.a(f,_),w=-1;1>=w;w+=1)if(!(0>f+w||u<=f+w))for(var S=-1;1>=S;S+=1)0>_+S||u<=_+S||(w!=0||S!=0)&&U==h.a(f+w,_+S)&&(P+=1);5<P&&(b+=3+P-5)}for(f=0;f<u-1;f+=1)for(_=0;_<u-1;_+=1)P=0,h.a(f,_)&&(P+=1),h.a(f+1,_)&&(P+=1),h.a(f,_+1)&&(P+=1),h.a(f+1,_+1)&&(P+=1),(P==0||P==4)&&(b+=3);for(f=0;f<u;f+=1)for(_=0;_<u-6;_+=1)h.a(f,_)&&!h.a(f,_+1)&&h.a(f,_+2)&&h.a(f,_+3)&&h.a(f,_+4)&&!h.a(f,_+5)&&h.a(f,_+6)&&(b+=40);for(_=0;_<u;_+=1)for(f=0;f<u-6;f+=1)h.a(f,_)&&!h.a(f+1,_)&&h.a(f+2,_)&&h.a(f+3,_)&&h.a(f+4,_)&&!h.a(f+5,_)&&h.a(f+6,_)&&(b+=40);for(_=P=0;_<u;_+=1)for(f=0;f<u;f+=1)h.a(f,_)&&(P+=1);return b+=Math.abs(100*P/u/u-50)/5*10}};return y}(),n=function(){for(var c=Array(256),p=Array(256),y=0;8>y;y+=1)c[y]=1<<y;for(y=8;256>y;y+=1)c[y]=c[y-4]^c[y-5]^c[y-6]^c[y-8];for(y=0;255>y;y+=1)p[c[y]]=y;return{g:function(h){if(1>h)throw Error("glog("+h+")");return p[h]},i:function(h){for(;0>h;)h+=255;for(;256<=h;)h-=255;return c[h]}}}(),d=function(){function c(h,u){switch(u){case r.L:return p[4*(h-1)];case r.M:return p[4*(h-1)+1];case r.Q:return p[4*(h-1)+2];case r.H:return p[4*(h-1)+3]}}var p=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],y={I:function(h,u){var b=c(h,u);if(typeof b>"u")throw Error("bad rs block @ typeNumber:"+h+"/errorCorrectLevel:"+u);h=b.length/3,u=[];for(var f=0;f<h;f+=1)for(var _=b[3*f],P=b[3*f+1],U=b[3*f+2],w=0;w<_;w+=1){var S=U,m={};m.o=P,m.j=S,u.push(m)}return u}};return y}();return s}());const Ps=QrCreator;var vt=class extends ${constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&Ps.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var t;return g`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((t=this.label)==null?void 0:t.length)>0?this.label:this.value}
        style=${rt({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};vt.styles=[I,Vs];i([k("canvas")],vt.prototype,"canvas",2);i([o()],vt.prototype,"value",2);i([o()],vt.prototype,"label",2);i([o({type:Number})],vt.prototype,"size",2);i([o()],vt.prototype,"fill",2);i([o()],vt.prototype,"background",2);i([o({type:Number})],vt.prototype,"radius",2);i([o({attribute:"error-correction"})],vt.prototype,"errorCorrection",2);i([x(["background","errorCorrection","fill","radius","size","value"])],vt.prototype,"generate",1);vt.define("sl-qr-code");var Fs=A`
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`,Ct=class extends ${constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return g`
      <span
        part="base"
        class=${T({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?g` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};Ct.styles=[I,Fs];Ct.dependencies={"sl-icon":st};i([C()],Ct.prototype,"checked",2);i([C()],Ct.prototype,"hasFocus",2);i([o()],Ct.prototype,"value",2);i([o({reflect:!0})],Ct.prototype,"size",2);i([o({type:Boolean,reflect:!0})],Ct.prototype,"disabled",2);i([x("checked")],Ct.prototype,"handleCheckedChange",1);i([x("disabled",{waitUntilFirstUpdate:!0})],Ct.prototype,"handleDisabledChange",1);Ct.define("sl-radio");var Rs=A`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,mt=class extends ${constructor(){super(...arguments),this.localize=new R(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{const t=this.closest("sl-select");t&&t.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const t=this.childNodes;let e="";return[...t].forEach(s=>{s.nodeType===Node.ELEMENT_NODE&&(s.hasAttribute("slot")||(e+=s.textContent)),s.nodeType===Node.TEXT_NODE&&(e+=s.textContent)}),e.trim()}render(){return g`
      <div
        part="base"
        class=${T({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};mt.styles=[I,Rs];mt.dependencies={"sl-icon":st};i([k(".option__label")],mt.prototype,"defaultSlot",2);i([C()],mt.prototype,"current",2);i([C()],mt.prototype,"selected",2);i([C()],mt.prototype,"hasHover",2);i([o({reflect:!0})],mt.prototype,"value",2);i([o({type:Boolean,reflect:!0})],mt.prototype,"disabled",2);i([x("disabled")],mt.prototype,"handleDisabledChange",1);i([x("selected")],mt.prototype,"handleSelectedChange",1);i([x("value")],mt.prototype,"handleValueChange",1);mt.define("sl-option");he.define("sl-popup");var Bs=A`
  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`,Jt=class extends ${constructor(){super(...arguments),this.localize=new R(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return g`
      <div
        part="base"
        class=${T({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${L(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${rt({width:`${this.value}%`})}>
          ${this.indeterminate?"":g` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};Jt.styles=[I,Bs];i([o({type:Number,reflect:!0})],Jt.prototype,"value",2);i([o({type:Boolean,reflect:!0})],Jt.prototype,"indeterminate",2);i([o()],Jt.prototype,"label",2);Jt.define("sl-progress-bar");var Hs=A`
  :host {
    display: contents;
  }
`,$t=class extends ${constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=t=>{this.emit("sl-mutation",{detail:{mutationList:t}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const t=typeof this.attr=="string"&&this.attr.length>0,e=t&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:t,attributeFilter:e,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return g` <slot></slot> `}};$t.styles=[I,Hs];i([o({reflect:!0})],$t.prototype,"attr",2);i([o({attribute:"attr-old-value",type:Boolean,reflect:!0})],$t.prototype,"attrOldValue",2);i([o({attribute:"char-data",type:Boolean,reflect:!0})],$t.prototype,"charData",2);i([o({attribute:"char-data-old-value",type:Boolean,reflect:!0})],$t.prototype,"charDataOldValue",2);i([o({attribute:"child-list",type:Boolean,reflect:!0})],$t.prototype,"childList",2);i([o({type:Boolean,reflect:!0})],$t.prototype,"disabled",2);i([x("disabled")],$t.prototype,"handleDisabledChange",1);i([x("attr",{waitUntilFirstUpdate:!0}),x("attr-old-value",{waitUntilFirstUpdate:!0}),x("char-data",{waitUntilFirstUpdate:!0}),x("char-data-old-value",{waitUntilFirstUpdate:!0}),x("childList",{waitUntilFirstUpdate:!0})],$t.prototype,"handleChange",1);$t.define("sl-mutation-observer");var Ns=A`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,Te=class extends ${connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){const e=["menuitem","menuitemcheckbox"],s=t.composedPath(),a=s.find(d=>{var c;return e.includes(((c=d?.getAttribute)==null?void 0:c.call(d,"role"))||"")});if(!a||s.find(d=>{var c;return((c=d?.getAttribute)==null?void 0:c.call(d,"role"))==="menu"})!==this)return;const n=a;n.type==="checkbox"&&(n.checked=!n.checked),this.emit("sl-select",{detail:{item:n}})}handleKeyDown(t){if(t.key==="Enter"||t.key===" "){const e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),e?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems(),s=this.getCurrentItem();let a=s?e.indexOf(s):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),t.key==="ArrowDown"?a++:t.key==="ArrowUp"?a--:t.key==="Home"?a=0:t.key==="End"&&(a=e.length-1),a<0&&(a=e.length-1),a>e.length-1&&(a=0),this.setCurrentItem(e[a]),e[a].focus())}}handleMouseDown(t){const e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){const t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return t.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((e=t.getAttribute("role"))!=null?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.inert||!this.isMenuItem(t)))}getCurrentItem(){return this.getAllItems().find(t=>t.getAttribute("tabindex")==="0")}setCurrentItem(t){this.getAllItems().forEach(s=>{s.setAttribute("tabindex",s===t?"0":"-1")})}render(){return g`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Te.styles=[I,Ns];i([k("slot")],Te.prototype,"defaultSlot",2);Te.define("sl-menu");var Us=A`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,D=class extends ${constructor(){super(...arguments),this.formControlController=new Mt(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new kt(this,"help-text","label"),this.localize=new R(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,s="none"){this.input.setSelectionRange(t,e,s)}setRangeText(t,e,s,a="preserve"){const r=e??this.input.selectionStart,l=s??this.input.selectionEnd;this.input.setRangeText(t,r,l,a),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),s=this.label?!0:!!t,a=this.helpText?!0:!!e,l=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return g`
      <div
        part="form-control"
        class=${T({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":a})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${T({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${L(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${L(this.placeholder)}
              minlength=${L(this.minlength)}
              maxlength=${L(this.maxlength)}
              min=${L(this.min)}
              max=${L(this.max)}
              step=${L(this.step)}
              .value=${Rt(this.value)}
              autocapitalize=${L(this.autocapitalize)}
              autocomplete=${L(this.autocomplete)}
              autocorrect=${L(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${L(this.pattern)}
              enterkeyhint=${L(this.enterkeyhint)}
              inputmode=${L(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${l?g`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?g`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?g`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:g`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${a?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};D.styles=[I,Bt,Us];D.dependencies={"sl-icon":st};i([k(".input__control")],D.prototype,"input",2);i([C()],D.prototype,"hasFocus",2);i([o()],D.prototype,"title",2);i([o({reflect:!0})],D.prototype,"type",2);i([o()],D.prototype,"name",2);i([o()],D.prototype,"value",2);i([Yt()],D.prototype,"defaultValue",2);i([o({reflect:!0})],D.prototype,"size",2);i([o({type:Boolean,reflect:!0})],D.prototype,"filled",2);i([o({type:Boolean,reflect:!0})],D.prototype,"pill",2);i([o()],D.prototype,"label",2);i([o({attribute:"help-text"})],D.prototype,"helpText",2);i([o({type:Boolean})],D.prototype,"clearable",2);i([o({type:Boolean,reflect:!0})],D.prototype,"disabled",2);i([o()],D.prototype,"placeholder",2);i([o({type:Boolean,reflect:!0})],D.prototype,"readonly",2);i([o({attribute:"password-toggle",type:Boolean})],D.prototype,"passwordToggle",2);i([o({attribute:"password-visible",type:Boolean})],D.prototype,"passwordVisible",2);i([o({attribute:"no-spin-buttons",type:Boolean})],D.prototype,"noSpinButtons",2);i([o({reflect:!0})],D.prototype,"form",2);i([o({type:Boolean,reflect:!0})],D.prototype,"required",2);i([o()],D.prototype,"pattern",2);i([o({type:Number})],D.prototype,"minlength",2);i([o({type:Number})],D.prototype,"maxlength",2);i([o()],D.prototype,"min",2);i([o()],D.prototype,"max",2);i([o()],D.prototype,"step",2);i([o()],D.prototype,"autocapitalize",2);i([o()],D.prototype,"autocorrect",2);i([o()],D.prototype,"autocomplete",2);i([o({type:Boolean})],D.prototype,"autofocus",2);i([o()],D.prototype,"enterkeyhint",2);i([o({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],D.prototype,"spellcheck",2);i([o()],D.prototype,"inputmode",2);i([x("disabled",{waitUntilFirstUpdate:!0})],D.prototype,"handleDisabledChange",1);i([x("step",{waitUntilFirstUpdate:!0})],D.prototype,"handleStepChange",1);i([x("value",{waitUntilFirstUpdate:!0})],D.prototype,"handleValueChange",1);D.define("sl-input");var qs=A`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wt=(t,e)=>{const s=t._$AN;if(s===void 0)return!1;for(const a of s)a._$AO?.(e,!1),Wt(a,e);return!0},de=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while(s?.size===0)},We=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),Ws(e)}};function Ks(t){this._$AN!==void 0?(de(this),this._$AM=t,We(this)):this._$AM=t}function js(t,e=!1,s=0){const a=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(a))for(let l=s;l<a.length;l++)Wt(a[l],!1),de(a[l]);else a!=null&&(Wt(a,!1),de(a));else Wt(this,t)}const Ws=t=>{t.type==Se.CHILD&&(t._$AP??=js,t._$AQ??=Ks)};class Ys extends $e{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,a){super._$AT(e,s,a),We(this),this.isConnected=e._$AU}_$AO(e,s=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),s&&(Wt(this,e),de(this))}setValue(e){if(rs(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xs=()=>new Gs;class Gs{}const ge=new WeakMap,Qs=ze(class extends Ys{render(t){return ce}update(t,[e]){const s=e!==this.Y;return s&&this.Y!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),ce}rt(t){if(this.isConnected||(t=void 0),typeof this.Y=="function"){const e=this.ht??globalThis;let s=ge.get(e);s===void 0&&(s=new WeakMap,ge.set(e,s)),s.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),s.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){return typeof this.Y=="function"?ge.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Zs=class{constructor(t,e){this.popupRef=Xs(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=s=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${s.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${s.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=s=>{switch(s.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":s.target!==this.host&&(s.preventDefault(),s.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(s);break}},this.handleClick=s=>{var a;s.target===this.host?(s.preventDefault(),s.stopPropagation()):s.target instanceof Element&&(s.target.tagName==="sl-menu-item"||(a=s.target.role)!=null&&a.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=s=>{s.relatedTarget&&s.relatedTarget instanceof Element&&this.host.contains(s.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=s=>{s.stopPropagation()},this.handlePopupReposition=()=>{const s=this.host.renderRoot.querySelector("slot[name='submenu']"),a=s?.assignedElements({flatten:!0}).filter(p=>p.localName==="sl-menu")[0],r=getComputedStyle(this.host).direction==="rtl";if(!a)return;const{left:l,top:n,width:d,height:c}=a.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${r?l+d:l}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${n}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${r?l+d:l}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${n+c}px`)},(this.host=t).addController(this),this.hasSlotController=e}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){const e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let s=null;for(const a of e.assignedElements())if(s=a.querySelectorAll("sl-menu-item, [role^='menuitem']"),s.length!==0)break;if(!(!s||s.length===0)){s[0].setAttribute("tabindex","0");for(let a=1;a!==s.length;++a)s[a].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?s[0]instanceof HTMLElement&&s[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{s[0]instanceof HTMLElement&&s[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!((t=this.host.parentElement)!=null&&t.computedStyleMap))return;const e=this.host.parentElement.computedStyleMap(),a=["padding-top","border-top-width","margin-top"].reduce((r,l)=>{var n;const d=(n=e.get(l))!=null?n:new CSSUnitValue(0,"px"),p=(d instanceof CSSUnitValue?d:new CSSUnitValue(0,"px")).to("px");return r-p.value},0);this.skidding=a}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const t=getComputedStyle(this.host).direction==="rtl";return this.isConnected?g`
      <sl-popup
        ${Qs(this.popupRef)}
        placement=${t?"left-start":"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:g` <slot name="submenu" hidden></slot> `}},dt=class extends ${constructor(){super(...arguments),this.localize=new R(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new kt(this,"submenu"),this.submenuController=new Zs(this,this.hasSlotController),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return os(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const t=this.localize.dir()==="rtl",e=this.submenuController.isExpanded();return g`
      <div
        id="anchor"
        part="base"
        class=${T({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!e}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${t?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?g` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};dt.styles=[I,qs];dt.dependencies={"sl-icon":st,"sl-popup":he,"sl-spinner":Ce};i([k("slot:not([name])")],dt.prototype,"defaultSlot",2);i([k(".menu-item")],dt.prototype,"menuItem",2);i([o()],dt.prototype,"type",2);i([o({type:Boolean,reflect:!0})],dt.prototype,"checked",2);i([o()],dt.prototype,"value",2);i([o({type:Boolean,reflect:!0})],dt.prototype,"loading",2);i([o({type:Boolean,reflect:!0})],dt.prototype,"disabled",2);i([x("checked")],dt.prototype,"handleCheckedChange",1);i([x("disabled")],dt.prototype,"handleDisabledChange",1);i([x("type")],dt.prototype,"handleTypeChange",1);dt.define("sl-menu-item");var Js=A`
  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`,Ye=class extends ${render(){return g` <slot part="base" class="menu-label"></slot> `}};Ye.styles=[I,Js];Ye.define("sl-menu-label");var ti=A`
  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,Ft=class extends ${constructor(){super(...arguments),this.localize=new R(this),this.position=50}handleDrag(t){const{width:e}=this.base.getBoundingClientRect(),s=this.localize.dir()==="rtl";t.preventDefault(),jt(this.base,{onMove:a=>{this.position=parseFloat(Y(a/e*100,0,100).toFixed(2)),s&&(this.position=100-this.position)},initialEvent:t})}handleKeyDown(t){const e=this.localize.dir()==="ltr",s=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(t.key)){const a=t.shiftKey?10:1;let r=this.position;t.preventDefault(),(e&&t.key==="ArrowLeft"||s&&t.key==="ArrowRight")&&(r-=a),(e&&t.key==="ArrowRight"||s&&t.key==="ArrowLeft")&&(r+=a),t.key==="Home"&&(r=0),t.key==="End"&&(r=100),r=Y(r,0,100),this.position=r}}handlePositionChange(){this.emit("sl-change")}render(){const t=this.localize.dir()==="rtl";return g`
      <div
        part="base"
        id="image-comparer"
        class=${T({"image-comparer":!0,"image-comparer--rtl":t})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${rt({clipPath:t?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${rt({left:t?`${100-this.position}%`:`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <sl-icon library="system" name="grip-vertical"></sl-icon>
            </slot>
          </div>
        </div>
      </div>
    `}};Ft.styles=[I,ti];Ft.scopedElement={"sl-icon":st};i([k(".image-comparer")],Ft.prototype,"base",2);i([k(".image-comparer__handle")],Ft.prototype,"handle",2);i([o({type:Number,reflect:!0})],Ft.prototype,"position",2);i([x("position",{waitUntilFirstUpdate:!0})],Ft.prototype,"handlePositionChange",1);Ft.define("sl-image-comparer");var ei=A`
  :host {
    display: block;
  }
`,be=new Map;function si(t,e="cors"){const s=be.get(t);if(s!==void 0)return Promise.resolve(s);const a=fetch(t,{mode:e}).then(async r=>{const l={ok:r.ok,status:r.status,html:await r.text()};return be.set(t,l),l});return be.set(t,a),a}var Nt=class extends ${constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(t){const e=document.createElement("script");[...t.attributes].forEach(s=>e.setAttribute(s.name,s.value)),e.textContent=t.textContent,t.parentNode.replaceChild(e,t)}async handleSrcChange(){try{const t=this.src,e=await si(t,this.mode);if(t!==this.src)return;if(!e.ok){this.emit("sl-error",{detail:{status:e.status}});return}this.innerHTML=e.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(s=>this.executeScript(s)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return g`<slot></slot>`}};Nt.styles=[I,ei];i([o()],Nt.prototype,"src",2);i([o()],Nt.prototype,"mode",2);i([o({attribute:"allow-scripts",type:Boolean})],Nt.prototype,"allowScripts",2);i([x("src")],Nt.prototype,"handleSrcChange",1);Nt.define("sl-include");Xt.define("sl-icon-button");var ue=class extends ${constructor(){super(...arguments),this.localize=new R(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const t=["","kilo","mega","giga","tera"],e=["","kilo","mega","giga","tera","peta"],s=this.unit==="bit"?t:e,a=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),s.length-1)),r=s[a]+this.unit,l=parseFloat((this.value/Math.pow(1e3,a)).toPrecision(3));return this.localize.number(l,{style:"unit",unit:r,unitDisplay:this.display})}};i([o({type:Number})],ue.prototype,"value",2);i([o()],ue.prototype,"unit",2);i([o()],ue.prototype,"display",2);ue.define("sl-format-bytes");var ht=class extends ${constructor(){super(...arguments),this.localize=new R(this),this.date=new Date,this.hourFormat="auto"}render(){const t=new Date(this.date),e=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(t.getMilliseconds()))return g`
      <time datetime=${t.toISOString()}>
        ${this.localize.date(t,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:e})}
      </time>
    `}};i([o()],ht.prototype,"date",2);i([o()],ht.prototype,"weekday",2);i([o()],ht.prototype,"era",2);i([o()],ht.prototype,"year",2);i([o()],ht.prototype,"month",2);i([o()],ht.prototype,"day",2);i([o()],ht.prototype,"hour",2);i([o()],ht.prototype,"minute",2);i([o()],ht.prototype,"second",2);i([o({attribute:"time-zone-name"})],ht.prototype,"timeZoneName",2);i([o({attribute:"time-zone"})],ht.prototype,"timeZone",2);i([o({attribute:"hour-format"})],ht.prototype,"hourFormat",2);ht.define("sl-format-date");var yt=class extends ${constructor(){super(...arguments),this.localize=new R(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};i([o({type:Number})],yt.prototype,"value",2);i([o()],yt.prototype,"type",2);i([o({attribute:"no-grouping",type:Boolean})],yt.prototype,"noGrouping",2);i([o()],yt.prototype,"currency",2);i([o({attribute:"currency-display"})],yt.prototype,"currencyDisplay",2);i([o({attribute:"minimum-integer-digits",type:Number})],yt.prototype,"minimumIntegerDigits",2);i([o({attribute:"minimum-fraction-digits",type:Number})],yt.prototype,"minimumFractionDigits",2);i([o({attribute:"maximum-fraction-digits",type:Number})],yt.prototype,"maximumFractionDigits",2);i([o({attribute:"minimum-significant-digits",type:Number})],yt.prototype,"minimumSignificantDigits",2);i([o({attribute:"maximum-significant-digits",type:Number})],yt.prototype,"maximumSignificantDigits",2);yt.define("sl-format-number");var ii=A`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,pe=class extends ${constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};pe.styles=[I,ii];i([o({type:Boolean,reflect:!0})],pe.prototype,"vertical",2);i([x("vertical")],pe.prototype,"handleVerticalChange",1);pe.define("sl-divider");var ai=A`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;function Oe(t){return t.charAt(0).toUpperCase()+t.slice(1)}var ut=class extends ${constructor(){super(...arguments),this.hasSlotController=new kt(this,"footer"),this.localize=new R(this),this.modal=new ls(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.contained||t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),fe(this)))}disconnectedCallback(){super.disconnectedCallback(),me(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const s=at(this,"drawer.denyClose",{dir:this.localize.dir()});nt(this.panel,s.keyframes,s.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;document.removeEventListener("keydown",this.handleDocumentKeyDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),fe(this));const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([ft(this.drawer),ft(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=at(this,`drawer.show${Oe(this.placement)}`,{dir:this.localize.dir()}),s=at(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([nt(this.panel,e.keyframes,e.options),nt(this.overlay,s.keyframes,s.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),me(this)),await Promise.all([ft(this.drawer),ft(this.overlay)]);const t=at(this,`drawer.hide${Oe(this.placement)}`,{dir:this.localize.dir()}),e=at(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([nt(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),nt(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const s=this.originalTrigger;typeof s?.focus=="function"&&setTimeout(()=>s.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),fe(this)),this.open&&this.contained&&(this.modal.deactivate(),me(this))}async show(){if(!this.open)return this.open=!0,At(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,At(this,"sl-after-hide")}render(){return g`
      <div
        part="base"
        class=${T({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${L(this.noHeader?this.label:void 0)}
          aria-labelledby=${L(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":g`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};ut.styles=[I,ai];ut.dependencies={"sl-icon-button":Xt};i([k(".drawer")],ut.prototype,"drawer",2);i([k(".drawer__panel")],ut.prototype,"panel",2);i([k(".drawer__overlay")],ut.prototype,"overlay",2);i([o({type:Boolean,reflect:!0})],ut.prototype,"open",2);i([o({reflect:!0})],ut.prototype,"label",2);i([o({reflect:!0})],ut.prototype,"placement",2);i([o({type:Boolean,reflect:!0})],ut.prototype,"contained",2);i([o({attribute:"no-header",type:Boolean,reflect:!0})],ut.prototype,"noHeader",2);i([x("open",{waitUntilFirstUpdate:!0})],ut.prototype,"handleOpenChange",1);i([x("contained",{waitUntilFirstUpdate:!0})],ut.prototype,"handleNoModalChange",1);W("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});W("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});W("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});W("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});W("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});W("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});W("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});W("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});W("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});W("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});W("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});ut.define("sl-drawer");var ri=A`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,et=class extends ${constructor(){super(...arguments),this.localize=new R(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if(t.key==="Escape"&&this.open&&!this.closeWatcher){t.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(t.key==="Tab"){if(this.open&&((e=document.activeElement)==null?void 0:e.tagName.toLowerCase())==="sl-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var s,a,r;const l=((s=this.containingElement)==null?void 0:s.getRootNode())instanceof ShadowRoot?(r=(a=document.activeElement)==null?void 0:a.shadowRoot)==null?void 0:r.activeElement:document.activeElement;(!this.containingElement||l?.closest(this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{const e=t.target;!this.stayOpenOnSelect&&e.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.assignedElements({flatten:!0})[0];typeof t?.focus=="function"&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}const e=this.getMenu();if(e){const s=e.getAllItems(),a=s[0],r=s[s.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),s.length>0&&this.updateComplete.then(()=>{(t.key==="ArrowDown"||t.key==="Home")&&(e.setCurrentItem(a),a.focus()),(t.key==="ArrowUp"||t.key==="End")&&(e.setCurrentItem(r),r.focus())}))}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const e=this.trigger.assignedElements({flatten:!0}).find(a=>ns(a).start);let s;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":s=e.button;break;default:s=e}s.setAttribute("aria-haspopup","true"),s.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,At(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,At(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var t;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var t;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await ft(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=at(this,"dropdown.show",{dir:this.localize.dir()});await nt(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await ft(this);const{keyframes:t,options:e}=at(this,"dropdown.hide",{dir:this.localize.dir()});await nt(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return g`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${L(this.sync?this.sync:void 0)}
        class=${T({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};et.styles=[I,ri];et.dependencies={"sl-popup":he};i([k(".dropdown")],et.prototype,"popup",2);i([k(".dropdown__trigger")],et.prototype,"trigger",2);i([k(".dropdown__panel")],et.prototype,"panel",2);i([o({type:Boolean,reflect:!0})],et.prototype,"open",2);i([o({reflect:!0})],et.prototype,"placement",2);i([o({type:Boolean,reflect:!0})],et.prototype,"disabled",2);i([o({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],et.prototype,"stayOpenOnSelect",2);i([o({attribute:!1})],et.prototype,"containingElement",2);i([o({type:Number})],et.prototype,"distance",2);i([o({type:Number})],et.prototype,"skidding",2);i([o({type:Boolean})],et.prototype,"hoist",2);i([o({reflect:!0})],et.prototype,"sync",2);i([x("open",{waitUntilFirstUpdate:!0})],et.prototype,"handleOpenChange",1);W("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});W("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});et.define("sl-dropdown");var oi=A`
  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,G=class extends ${constructor(){super(...arguments),this.localize=new R(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let t=this.value;if(this.from){const e=this.getRootNode(),s=this.from.includes("."),a=this.from.includes("[")&&this.from.includes("]");let r=this.from,l="";s?[r,l]=this.from.trim().split("."):a&&([r,l]=this.from.trim().replace(/\]$/,"").split("["));const n="getElementById"in e?e.getElementById(r):null;n?a?t=n.getAttribute(l)||"":s?t=n[l]||"":t=n.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!t)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(t),this.showStatus("success"),this.emit("sl-copy",{detail:{value:t}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(t){const e=this.copyLabel||this.localize.term("copy"),s=this.successLabel||this.localize.term("copied"),a=this.errorLabel||this.localize.term("error"),r=t==="success"?this.successIcon:this.errorIcon,l=at(this,"copy.in",{dir:"ltr"}),n=at(this,"copy.out",{dir:"ltr"});this.tooltip.content=t==="success"?s:a,await this.copyIcon.animate(n.keyframes,n.options).finished,this.copyIcon.hidden=!0,this.status=t,r.hidden=!1,await r.animate(l.keyframes,l.options).finished,setTimeout(async()=>{await r.animate(n.keyframes,n.options).finished,r.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(l.keyframes,l.options).finished,this.tooltip.content=e,this.isCopying=!1},this.feedbackDuration)}render(){const t=this.copyLabel||this.localize.term("copy");return g`
      <sl-tooltip
        class=${T({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
        content=${t}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};G.styles=[I,oi];G.dependencies={"sl-icon":st,"sl-tooltip":cs};i([k('slot[name="copy-icon"]')],G.prototype,"copyIcon",2);i([k('slot[name="success-icon"]')],G.prototype,"successIcon",2);i([k('slot[name="error-icon"]')],G.prototype,"errorIcon",2);i([k("sl-tooltip")],G.prototype,"tooltip",2);i([C()],G.prototype,"isCopying",2);i([C()],G.prototype,"status",2);i([o()],G.prototype,"value",2);i([o()],G.prototype,"from",2);i([o({type:Boolean,reflect:!0})],G.prototype,"disabled",2);i([o({attribute:"copy-label"})],G.prototype,"copyLabel",2);i([o({attribute:"success-label"})],G.prototype,"successLabel",2);i([o({attribute:"error-label"})],G.prototype,"errorLabel",2);i([o({attribute:"feedback-duration",type:Number})],G.prototype,"feedbackDuration",2);i([o({attribute:"tooltip-placement"})],G.prototype,"tooltipPlacement",2);i([o({type:Boolean})],G.prototype,"hoist",2);W("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});W("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});G.define("sl-copy-button");var li=A`
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,_t=class extends ${constructor(){super(...arguments),this.localize=new R(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(t=>{for(const e of t)e.type==="attributes"&&e.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.detailsObserver)==null||t.disconnect()}handleSummaryClick(t){t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.open?this.hide():this.show()),(t.key==="ArrowUp"||t.key==="ArrowLeft")&&(t.preventDefault(),this.hide()),(t.key==="ArrowDown"||t.key==="ArrowRight")&&(t.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await ft(this.body);const{keyframes:e,options:s}=at(this,"details.show",{dir:this.localize.dir()});await nt(this.body,ne(e,this.body.scrollHeight),s),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await ft(this.body);const{keyframes:e,options:s}=at(this,"details.hide",{dir:this.localize.dir()});await nt(this.body,ne(e,this.body.scrollHeight),s),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,At(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,At(this,"sl-after-hide")}render(){const t=this.localize.dir()==="rtl";return g`
      <details
        part="base"
        class=${T({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":t})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};_t.styles=[I,li];_t.dependencies={"sl-icon":st};i([k(".details")],_t.prototype,"details",2);i([k(".details__header")],_t.prototype,"header",2);i([k(".details__body")],_t.prototype,"body",2);i([k(".details__expand-icon-slot")],_t.prototype,"expandIconSlot",2);i([o({type:Boolean,reflect:!0})],_t.prototype,"open",2);i([o()],_t.prototype,"summary",2);i([o({type:Boolean,reflect:!0})],_t.prototype,"disabled",2);i([x("open",{waitUntilFirstUpdate:!0})],_t.prototype,"handleOpenChange",1);W("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});W("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});_t.define("sl-details");X.define("sl-checkbox");var ni=A`
  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
    -webkit-user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position:
      0 0,
      0 0,
      -5px -5px,
      5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 2px var(--sl-input-border-color),
      inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;function Z(t,e){ci(t)&&(t="100%");const s=di(t);return t=e===360?t:Math.min(e,Math.max(0,parseFloat(t))),s&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:(e===360?t=(t<0?t%e+e:t%e)/parseFloat(String(e)):t=t%e/parseFloat(String(e)),t)}function ae(t){return Math.min(1,Math.max(0,t))}function ci(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function di(t){return typeof t=="string"&&t.indexOf("%")!==-1}function Xe(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function re(t){return Number(t)<=1?`${Number(t)*100}%`:t}function Lt(t){return t.length===1?"0"+t:String(t)}function hi(t,e,s){return{r:Z(t,255)*255,g:Z(e,255)*255,b:Z(s,255)*255}}function Ve(t,e,s){t=Z(t,255),e=Z(e,255),s=Z(s,255);const a=Math.max(t,e,s),r=Math.min(t,e,s);let l=0,n=0;const d=(a+r)/2;if(a===r)n=0,l=0;else{const c=a-r;switch(n=d>.5?c/(2-a-r):c/(a+r),a){case t:l=(e-s)/c+(e<s?6:0);break;case e:l=(s-t)/c+2;break;case s:l=(t-e)/c+4;break}l/=6}return{h:l,s:n,l:d}}function ve(t,e,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?t+(e-t)*(6*s):s<1/2?e:s<2/3?t+(e-t)*(2/3-s)*6:t}function ui(t,e,s){let a,r,l;if(t=Z(t,360),e=Z(e,100),s=Z(s,100),e===0)r=s,l=s,a=s;else{const n=s<.5?s*(1+e):s+e-s*e,d=2*s-n;a=ve(d,n,t+1/3),r=ve(d,n,t),l=ve(d,n,t-1/3)}return{r:a*255,g:r*255,b:l*255}}function Pe(t,e,s){t=Z(t,255),e=Z(e,255),s=Z(s,255);const a=Math.max(t,e,s),r=Math.min(t,e,s);let l=0;const n=a,d=a-r,c=a===0?0:d/a;if(a===r)l=0;else{switch(a){case t:l=(e-s)/d+(e<s?6:0);break;case e:l=(s-t)/d+2;break;case s:l=(t-e)/d+4;break}l/=6}return{h:l,s:c,v:n}}function pi(t,e,s){t=Z(t,360)*6,e=Z(e,100),s=Z(s,100);const a=Math.floor(t),r=t-a,l=s*(1-e),n=s*(1-r*e),d=s*(1-(1-r)*e),c=a%6,p=[s,n,l,l,d,s][c],y=[d,s,s,n,l,l][c],h=[l,l,d,s,s,n][c];return{r:p*255,g:y*255,b:h*255}}function Fe(t,e,s,a){const r=[Lt(Math.round(t).toString(16)),Lt(Math.round(e).toString(16)),Lt(Math.round(s).toString(16))];return a&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function fi(t,e,s,a,r){const l=[Lt(Math.round(t).toString(16)),Lt(Math.round(e).toString(16)),Lt(Math.round(s).toString(16)),Lt(gi(a))];return r&&l[0].startsWith(l[0].charAt(1))&&l[1].startsWith(l[1].charAt(1))&&l[2].startsWith(l[2].charAt(1))&&l[3].startsWith(l[3].charAt(1))?l[0].charAt(0)+l[1].charAt(0)+l[2].charAt(0)+l[3].charAt(0):l.join("")}function mi(t,e,s,a){const r=t/100,l=e/100,n=s/100,d=a/100,c=255*(1-r)*(1-d),p=255*(1-l)*(1-d),y=255*(1-n)*(1-d);return{r:c,g:p,b:y}}function Re(t,e,s){let a=1-t/255,r=1-e/255,l=1-s/255,n=Math.min(a,r,l);return n===1?(a=0,r=0,l=0):(a=(a-n)/(1-n)*100,r=(r-n)/(1-n)*100,l=(l-n)/(1-n)*100),n*=100,{c:Math.round(a),m:Math.round(r),y:Math.round(l),k:Math.round(n)}}function gi(t){return Math.round(parseFloat(t)*255).toString(16)}function Be(t){return lt(t)/255}function lt(t){return parseInt(t,16)}function bi(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}const ke={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function vi(t){let e={r:0,g:0,b:0},s=1,a=null,r=null,l=null,n=!1,d=!1;return typeof t=="string"&&(t=xi(t)),typeof t=="object"&&(ot(t.r)&&ot(t.g)&&ot(t.b)?(e=hi(t.r,t.g,t.b),n=!0,d=String(t.r).substr(-1)==="%"?"prgb":"rgb"):ot(t.h)&&ot(t.s)&&ot(t.v)?(a=re(t.s),r=re(t.v),e=pi(t.h,a,r),n=!0,d="hsv"):ot(t.h)&&ot(t.s)&&ot(t.l)?(a=re(t.s),l=re(t.l),e=ui(t.h,a,l),n=!0,d="hsl"):ot(t.c)&&ot(t.m)&&ot(t.y)&&ot(t.k)&&(e=mi(t.c,t.m,t.y,t.k),n=!0,d="cmyk"),Object.prototype.hasOwnProperty.call(t,"a")&&(s=t.a)),s=Xe(s),{ok:n,format:t.format||d,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:s}}const yi="[-\\+]?\\d+%?",_i="[-\\+]?\\d*\\.\\d+%?",It="(?:"+_i+")|(?:"+yi+")",ye="[\\s|\\(]+("+It+")[,|\\s]+("+It+")[,|\\s]+("+It+")\\s*\\)?",oe="[\\s|\\(]+("+It+")[,|\\s]+("+It+")[,|\\s]+("+It+")[,|\\s]+("+It+")\\s*\\)?",pt={CSS_UNIT:new RegExp(It),rgb:new RegExp("rgb"+ye),rgba:new RegExp("rgba"+oe),hsl:new RegExp("hsl"+ye),hsla:new RegExp("hsla"+oe),hsv:new RegExp("hsv"+ye),hsva:new RegExp("hsva"+oe),cmyk:new RegExp("cmyk"+oe),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function xi(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;let e=!1;if(ke[t])t=ke[t],e=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let s=pt.rgb.exec(t);return s?{r:s[1],g:s[2],b:s[3]}:(s=pt.rgba.exec(t),s?{r:s[1],g:s[2],b:s[3],a:s[4]}:(s=pt.hsl.exec(t),s?{h:s[1],s:s[2],l:s[3]}:(s=pt.hsla.exec(t),s?{h:s[1],s:s[2],l:s[3],a:s[4]}:(s=pt.hsv.exec(t),s?{h:s[1],s:s[2],v:s[3]}:(s=pt.hsva.exec(t),s?{h:s[1],s:s[2],v:s[3],a:s[4]}:(s=pt.cmyk.exec(t),s?{c:s[1],m:s[2],y:s[3],k:s[4]}:(s=pt.hex8.exec(t),s?{r:lt(s[1]),g:lt(s[2]),b:lt(s[3]),a:Be(s[4]),format:e?"name":"hex8"}:(s=pt.hex6.exec(t),s?{r:lt(s[1]),g:lt(s[2]),b:lt(s[3]),format:e?"name":"hex"}:(s=pt.hex4.exec(t),s?{r:lt(s[1]+s[1]),g:lt(s[2]+s[2]),b:lt(s[3]+s[3]),a:Be(s[4]+s[4]),format:e?"name":"hex8"}:(s=pt.hex3.exec(t),s?{r:lt(s[1]+s[1]),g:lt(s[2]+s[2]),b:lt(s[3]+s[3]),format:e?"name":"hex"}:!1))))))))))}function ot(t){return typeof t=="number"?!Number.isNaN(t):pt.CSS_UNIT.test(t)}class q{constructor(e="",s={}){if(e instanceof q)return e;typeof e=="number"&&(e=bi(e)),this.originalInput=e;const a=vi(e);this.originalInput=e,this.r=a.r,this.g=a.g,this.b=a.b,this.a=a.a,this.roundA=Math.round(100*this.a)/100,this.format=s.format??a.format,this.gradientType=s.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=a.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3}getLuminance(){const e=this.toRgb();let s,a,r;const l=e.r/255,n=e.g/255,d=e.b/255;return l<=.03928?s=l/12.92:s=Math.pow((l+.055)/1.055,2.4),n<=.03928?a=n/12.92:a=Math.pow((n+.055)/1.055,2.4),d<=.03928?r=d/12.92:r=Math.pow((d+.055)/1.055,2.4),.2126*s+.7152*a+.0722*r}getAlpha(){return this.a}setAlpha(e){return this.a=Xe(e),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:e}=this.toHsl();return e===0}toHsv(){const e=Pe(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}}toHsvString(){const e=Pe(this.r,this.g,this.b),s=Math.round(e.h*360),a=Math.round(e.s*100),r=Math.round(e.v*100);return this.a===1?`hsv(${s}, ${a}%, ${r}%)`:`hsva(${s}, ${a}%, ${r}%, ${this.roundA})`}toHsl(){const e=Ve(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}}toHslString(){const e=Ve(this.r,this.g,this.b),s=Math.round(e.h*360),a=Math.round(e.s*100),r=Math.round(e.l*100);return this.a===1?`hsl(${s}, ${a}%, ${r}%)`:`hsla(${s}, ${a}%, ${r}%, ${this.roundA})`}toHex(e=!1){return Fe(this.r,this.g,this.b,e)}toHexString(e=!1){return"#"+this.toHex(e)}toHex8(e=!1){return fi(this.r,this.g,this.b,this.a,e)}toHex8String(e=!1){return"#"+this.toHex8(e)}toHexShortString(e=!1){return this.a===1?this.toHexString(e):this.toHex8String(e)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const e=Math.round(this.r),s=Math.round(this.g),a=Math.round(this.b);return this.a===1?`rgb(${e}, ${s}, ${a})`:`rgba(${e}, ${s}, ${a}, ${this.roundA})`}toPercentageRgb(){const e=s=>`${Math.round(Z(s,255)*100)}%`;return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}}toPercentageRgbString(){const e=s=>Math.round(Z(s,255)*100);return this.a===1?`rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)`:`rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`}toCmyk(){return{...Re(this.r,this.g,this.b)}}toCmykString(){const{c:e,m:s,y:a,k:r}=Re(this.r,this.g,this.b);return`cmyk(${e}, ${s}, ${a}, ${r})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const e="#"+Fe(this.r,this.g,this.b,!1);for(const[s,a]of Object.entries(ke))if(e===a)return s;return!1}toString(e){const s=!!e;e=e??this.format;let a=!1;const r=this.a<1&&this.a>=0;return!s&&r&&(e.startsWith("hex")||e==="name")?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(a=this.toRgbString()),e==="prgb"&&(a=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(a=this.toHexString()),e==="hex3"&&(a=this.toHexString(!0)),e==="hex4"&&(a=this.toHex8String(!0)),e==="hex8"&&(a=this.toHex8String()),e==="name"&&(a=this.toName()),e==="hsl"&&(a=this.toHslString()),e==="hsv"&&(a=this.toHsvString()),e==="cmyk"&&(a=this.toCmykString()),a||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new q(this.toString())}lighten(e=10){const s=this.toHsl();return s.l+=e/100,s.l=ae(s.l),new q(s)}brighten(e=10){const s=this.toRgb();return s.r=Math.max(0,Math.min(255,s.r-Math.round(255*-(e/100)))),s.g=Math.max(0,Math.min(255,s.g-Math.round(255*-(e/100)))),s.b=Math.max(0,Math.min(255,s.b-Math.round(255*-(e/100)))),new q(s)}darken(e=10){const s=this.toHsl();return s.l-=e/100,s.l=ae(s.l),new q(s)}tint(e=10){return this.mix("white",e)}shade(e=10){return this.mix("black",e)}desaturate(e=10){const s=this.toHsl();return s.s-=e/100,s.s=ae(s.s),new q(s)}saturate(e=10){const s=this.toHsl();return s.s+=e/100,s.s=ae(s.s),new q(s)}greyscale(){return this.desaturate(100)}spin(e){const s=this.toHsl(),a=(s.h+e)%360;return s.h=a<0?360+a:a,new q(s)}mix(e,s=50){const a=this.toRgb(),r=new q(e).toRgb(),l=s/100,n={r:(r.r-a.r)*l+a.r,g:(r.g-a.g)*l+a.g,b:(r.b-a.b)*l+a.b,a:(r.a-a.a)*l+a.a};return new q(n)}analogous(e=6,s=30){const a=this.toHsl(),r=360/s,l=[this];for(a.h=(a.h-(r*e>>1)+720)%360;--e;)a.h=(a.h+r)%360,l.push(new q(a));return l}complement(){const e=this.toHsl();return e.h=(e.h+180)%360,new q(e)}monochromatic(e=6){const s=this.toHsv(),{h:a}=s,{s:r}=s;let{v:l}=s;const n=[],d=1/e;for(;e--;)n.push(new q({h:a,s:r,v:l})),l=(l+d)%1;return n}splitcomplement(){const e=this.toHsl(),{h:s}=e;return[this,new q({h:(s+72)%360,s:e.s,l:e.l}),new q({h:(s+216)%360,s:e.s,l:e.l})]}onBackground(e){const s=this.toRgb(),a=new q(e).toRgb(),r=s.a+a.a*(1-s.a);return new q({r:(s.r*s.a+a.r*a.a*(1-s.a))/r,g:(s.g*s.a+a.g*a.a*(1-s.a))/r,b:(s.b*s.a+a.b*a.a*(1-s.a))/r,a:r})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(e){const s=this.toHsl(),{h:a}=s,r=[this],l=360/e;for(let n=1;n<e;n++)r.push(new q({h:(a+n*l)%360,s:s.s,l:s.l}));return r}equals(e){const s=new q(e);return this.format==="cmyk"||s.format==="cmyk"?this.toCmykString()===s.toCmykString():this.toRgbString()===s.toRgbString()}}var He="EyeDropper"in window,V=class extends ${constructor(){super(),this.formControlController=new Mt(this),this.isSafeValue=!1,this.localize=new R(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const t=["hex","rgb","hsl","hsv"],e=(t.indexOf(this.format)+1)%t.length;this.format=t[e],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),s=e.querySelector(".color-picker__slider-handle"),{width:a}=e.getBoundingClientRect();let r=this.value,l=this.value;s.focus(),t.preventDefault(),jt(e,{onMove:n=>{this.alpha=Y(n/a*100,0,100),this.syncValues(),this.value!==l&&(l=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==r&&(r=this.value,this.emit("sl-change"))},initialEvent:t})}handleHueDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),s=e.querySelector(".color-picker__slider-handle"),{width:a}=e.getBoundingClientRect();let r=this.value,l=this.value;s.focus(),t.preventDefault(),jt(e,{onMove:n=>{this.hue=Y(n/a*360,0,360),this.syncValues(),this.value!==l&&(l=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==r&&(r=this.value,this.emit("sl-change"))},initialEvent:t})}handleGridDrag(t){const e=this.shadowRoot.querySelector(".color-picker__grid"),s=e.querySelector(".color-picker__grid-handle"),{width:a,height:r}=e.getBoundingClientRect();let l=this.value,n=this.value;s.focus(),t.preventDefault(),this.isDraggingGridHandle=!0,jt(e,{onMove:(d,c)=>{this.saturation=Y(d/a*100,0,100),this.brightness=Y(100-c/r*100,0,100),this.syncValues(),this.value!==n&&(n=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==l&&(l=this.value,this.emit("sl-change"))},initialEvent:t})}handleAlphaKeyDown(t){const e=t.shiftKey?10:1,s=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.alpha=Y(this.alpha-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.alpha=Y(this.alpha+e,0,100),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.alpha=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.alpha=100,this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(t){const e=t.shiftKey?10:1,s=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.hue=Y(this.hue-e,0,360),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.hue=Y(this.hue+e,0,360),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.hue=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.hue=360,this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(t){const e=t.shiftKey?10:1,s=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.saturation=Y(this.saturation-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.saturation=Y(this.saturation+e,0,100),this.syncValues()),t.key==="ArrowUp"&&(t.preventDefault(),this.brightness=Y(this.brightness+e,0,100),this.syncValues()),t.key==="ArrowDown"&&(t.preventDefault(),this.brightness=Y(this.brightness-e,0,100),this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(t){const e=t.target,s=this.value;t.stopPropagation(),this.input.value?(this.setColor(e.value),e.value=this.value):this.value="",this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(t){this.formControlController.updateValidity(),t.stopPropagation()}handleInputKeyDown(t){if(t.key==="Enter"){const e=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleTouchMove(t){t.preventDefault()}parseColor(t){const e=new q(t);if(!e.isValid)return null;const s=e.toHsl(),a={h:s.h,s:s.s*100,l:s.l*100,a:s.a},r=e.toRgb(),l=e.toHexString(),n=e.toHex8String(),d=e.toHsv(),c={h:d.h,s:d.s*100,v:d.v*100,a:d.a};return{hsl:{h:a.h,s:a.s,l:a.l,string:this.setLetterCase(`hsl(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%)`)},hsla:{h:a.h,s:a.s,l:a.l,a:a.a,string:this.setLetterCase(`hsla(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%, ${a.a.toFixed(2).toString()})`)},hsv:{h:c.h,s:c.s,v:c.v,string:this.setLetterCase(`hsv(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.v)}%)`)},hsva:{h:c.h,s:c.s,v:c.v,a:c.a,string:this.setLetterCase(`hsva(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.v)}%, ${c.a.toFixed(2).toString()})`)},rgb:{r:r.r,g:r.g,b:r.b,string:this.setLetterCase(`rgb(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)})`)},rgba:{r:r.r,g:r.g,b:r.b,a:r.a,string:this.setLetterCase(`rgba(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)}, ${r.a.toFixed(2).toString()})`)},hex:this.setLetterCase(l),hexa:this.setLetterCase(n)}}setColor(t){const e=this.parseColor(t);return e===null?!1:(this.hue=e.hsva.h,this.saturation=e.hsva.s,this.brightness=e.hsva.v,this.alpha=this.opacity?e.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(t){return typeof t!="string"?"":this.uppercase?t.toUpperCase():t.toLowerCase()}async syncValues(){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);t!==null&&(this.format==="hsl"?this.inputValue=this.opacity?t.hsla.string:t.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?t.rgba.string:t.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?t.hsva.string:t.hsv.string:this.inputValue=this.opacity?t.hexa:t.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!He)return;new EyeDropper().open().then(e=>{const s=this.value;this.setColor(e.sRGBHex),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(t){const e=this.value;this.disabled||(this.setColor(t),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(t,e,s,a=100){const r=new q(`hsva(${t}, ${e}%, ${s}%, ${a/100})`);return r.isValid?r.toHex8String():""}stopNestedEventPropagation(t){t.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(t,e){if(this.isEmpty=!e,e||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const s=this.parseColor(e);s!==null?(this.inputValue=this.value,this.hue=s.hsva.h,this.saturation=s.hsva.s,this.brightness=s.hsva.v,this.alpha=s.hsva.a*100,this.syncValues()):this.inputValue=t??""}}focus(t){this.inline?this.base.focus(t):this.trigger.focus(t)}blur(){var t;const e=this.inline?this.base:this.trigger;this.hasFocus&&(e.focus({preventScroll:!0}),e.blur()),(t=this.dropdown)!=null&&t.open&&this.dropdown.hide()}getFormattedValue(t="hex"){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(e===null)return"";switch(t){case"hex":return e.hex;case"hexa":return e.hexa;case"rgb":return e.rgb.string;case"rgba":return e.rgba.string;case"hsl":return e.hsl.string;case"hsla":return e.hsla.string;case"hsv":return e.hsv.string;case"hsva":return e.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.saturation,e=100-this.brightness,s=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(r=>r.trim()!==""),a=g`
      <div
        part="base"
        class=${T({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?g`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${rt({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${T({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${rt({top:`${e}%`,left:`${t}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${L(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${rt({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${L(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?g`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${rt({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${rt({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${L(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${rt({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":g`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${He?g`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${s.length>0?g`
              <div part="swatches" class="color-picker__swatches">
                ${s.map(r=>{const l=this.parseColor(r);return l?g`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${L(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${r}
                      @click=${()=>this.selectSwatch(r)}
                      @keydown=${n=>!this.disabled&&n.key==="Enter"&&this.setColor(l.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${rt({backgroundColor:l.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${r}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?a:g`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containingElement=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${T({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${rt({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${a}
      </sl-dropdown>
    `}};V.styles=[I,ni];V.dependencies={"sl-button-group":Pt,"sl-button":ds,"sl-dropdown":et,"sl-icon":st,"sl-input":D,"sl-visually-hidden":Ae};i([k('[part~="base"]')],V.prototype,"base",2);i([k('[part~="input"]')],V.prototype,"input",2);i([k(".color-dropdown")],V.prototype,"dropdown",2);i([k('[part~="preview"]')],V.prototype,"previewButton",2);i([k('[part~="trigger"]')],V.prototype,"trigger",2);i([C()],V.prototype,"hasFocus",2);i([C()],V.prototype,"isDraggingGridHandle",2);i([C()],V.prototype,"isEmpty",2);i([C()],V.prototype,"inputValue",2);i([C()],V.prototype,"hue",2);i([C()],V.prototype,"saturation",2);i([C()],V.prototype,"brightness",2);i([C()],V.prototype,"alpha",2);i([o()],V.prototype,"value",2);i([Yt()],V.prototype,"defaultValue",2);i([o()],V.prototype,"label",2);i([o()],V.prototype,"format",2);i([o({type:Boolean,reflect:!0})],V.prototype,"inline",2);i([o({reflect:!0})],V.prototype,"size",2);i([o({attribute:"no-format-toggle",type:Boolean})],V.prototype,"noFormatToggle",2);i([o()],V.prototype,"name",2);i([o({type:Boolean,reflect:!0})],V.prototype,"disabled",2);i([o({type:Boolean})],V.prototype,"hoist",2);i([o({type:Boolean})],V.prototype,"opacity",2);i([o({type:Boolean})],V.prototype,"uppercase",2);i([o()],V.prototype,"swatches",2);i([o({reflect:!0})],V.prototype,"form",2);i([o({type:Boolean,reflect:!0})],V.prototype,"required",2);i([Gt({passive:!1})],V.prototype,"handleTouchMove",1);i([x("format",{waitUntilFirstUpdate:!0})],V.prototype,"handleFormatChange",1);i([x("opacity",{waitUntilFirstUpdate:!0})],V.prototype,"handleOpacityChange",1);i([x("value")],V.prototype,"handleValueChange",1);V.define("sl-color-picker");var wi=class{constructor(t,e){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},t.addController(this),this.host=t,this.tickCallback=e}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(t){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},t)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},ki=A`
  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging {
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Ci(t,e){if(t!==void 0){let s=0;for(const a of t)yield e(a,s++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*$i(t,e,s=1){const a=e===void 0?0:t;e??=t;for(let r=a;s>0?r<e:e<r;r+=s)yield r}var j=class extends ${constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new wi(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new R(this),this.pendingSlideChange=!1,this.handleMouseDrag=t=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[t.clientX,t.clientY]),this.scrollContainer.scrollBy({left:-t.movementX,top:-t.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const t=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const e=t.scrollLeft,s=t.scrollTop;t.style.removeProperty("scroll-snap-type"),t.style.setProperty("overflow","hidden");const a=t.scrollLeft,r=t.scrollTop;t.style.removeProperty("overflow"),t.style.setProperty("scroll-snap-type","none"),t.scrollTo({left:e,top:s,behavior:"instant"}),requestAnimationFrame(async()=>{(e!==a||s!==r)&&(t.scrollTo({left:a,top:r,behavior:Ee()?"auto":"smooth"}),await At(t,"scrollend")),t.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=t=>{t.some(s=>[...s.addedNodes,...s.removedNodes].some(a=>this.isCarouselItem(a)&&!a.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.mutationObserver)==null||t.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(t){(t.has("slidesPerMove")||t.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const t=this.getSlides().length,{slidesPerPage:e,slidesPerMove:s,loop:a}=this,r=a?t/s:(t-e)/s+1;return Math.ceil(r)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:t=!0}={}){return[...this.children].filter(e=>this.isCarouselItem(e)&&(!t||!e.hasAttribute("data-clone")))}handleClick(t){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){const e=Math.abs(this.dragStartPosition[0]-t.clientX),s=Math.abs(this.dragStartPosition[1]-t.clientY);Math.sqrt(e*e+s*s)>=10&&t.preventDefault()}}handleKeyDown(t){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){const e=t.target,s=this.localize.dir()==="rtl",a=e.closest('[part~="pagination-item"]')!==null,r=t.key==="ArrowDown"||!s&&t.key==="ArrowRight"||s&&t.key==="ArrowLeft",l=t.key==="ArrowUp"||!s&&t.key==="ArrowLeft"||s&&t.key==="ArrowRight";t.preventDefault(),l&&this.previous(),r&&this.next(),t.key==="Home"&&this.goToSlide(0),t.key==="End"&&this.goToSlide(this.getSlides().length-1),a&&this.updateComplete.then(()=>{var n;const d=(n=this.shadowRoot)==null?void 0:n.querySelector('[part~="pagination-item--active"]');d&&d.focus()})}}handleMouseDragStart(t){this.mouseDragging&&t.button===0&&(t.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){const t=new IntersectionObserver(e=>{t.disconnect();for(const d of e){const c=d.target;c.toggleAttribute("inert",!d.isIntersecting),c.classList.toggle("--in-view",d.isIntersecting),c.setAttribute("aria-hidden",d.isIntersecting?"false":"true")}const s=e.find(d=>d.isIntersecting);if(!s)return;const a=this.getSlides({excludeClones:!1}),r=this.getSlides().length,l=a.indexOf(s.target),n=this.loop?l-this.slidesPerPage:l;if(this.activeSlide=(Math.ceil(n/this.slidesPerMove)*this.slidesPerMove+r)%r,!this.scrolling&&this.loop&&s.target.hasAttribute("data-clone")){const d=Number(s.target.getAttribute("data-clone"));this.goToSlide(d,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(e=>{t.observe(e)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(t){return t instanceof Element&&t.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((t,e)=>{t.classList.remove("--in-view"),t.classList.remove("--is-active"),t.setAttribute("aria-label",this.localize.term("slideNum",e+1)),t.hasAttribute("data-clone")&&t.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){const t=this.getSlides(),e=this.slidesPerPage,s=t.slice(-e),a=t.slice(0,e);s.reverse().forEach((r,l)=>{const n=r.cloneNode(!0);n.setAttribute("data-clone",String(t.length-l-1)),this.prepend(n)}),a.forEach((r,l)=>{const n=r.cloneNode(!0);n.setAttribute("data-clone",String(l)),this.append(n)})}handleSlideChange(){const t=this.getSlides();t.forEach((e,s)=>{e.classList.toggle("--is-active",s===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:t[this.activeSlide]}})}updateSlidesSnap(){const t=this.getSlides(),e=this.slidesPerMove;t.forEach((s,a)=>{(a+e)%e===0?s.style.removeProperty("scroll-snap-align"):s.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(t="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,t)}next(t="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,t)}goToSlide(t,e="smooth"){const{slidesPerPage:s,loop:a}=this,r=this.getSlides(),l=this.getSlides({excludeClones:!1});if(!r.length)return;const n=a?(t+r.length)%r.length:Y(t,0,r.length-s);this.activeSlide=n;const d=this.localize.dir()==="rtl",c=Y(t+(a?s:0)+(d?s-1:0),0,l.length-1),p=l[c];this.scrollToSlide(p,Ee()?"auto":e)}scrollToSlide(t,e="smooth"){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;const s=this.scrollContainer,a=s.getBoundingClientRect(),r=t.getBoundingClientRect(),l=r.left-a.left,n=r.top-a.top;l||n?(this.pendingSlideChange=!0,s.scrollTo({left:l+s.scrollLeft,top:n+s.scrollTop,behavior:e})):this.pendingSlideChange=!1})}render(){const{slidesPerMove:t,scrolling:e}=this,s=this.getPageCount(),a=this.getCurrentPage(),r=this.canScrollPrev(),l=this.canScrollNext(),n=this.localize.dir()==="ltr";return g`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${T({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical","carousel__slides--dragging":this.dragging})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${e?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @mousedown="${this.handleMouseDragStart}"
          @scroll="${this.handleScroll}"
          @scrollend=${this.handleScrollEnd}
          @click=${this.handleClick}
        >
          <slot></slot>
        </div>

        ${this.navigation?g`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${T({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!r})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${r?"false":"true"}"
                  @click=${r?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${n?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${T({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!l})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${l?"false":"true"}"
                  @click=${l?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${n?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?g`
              <div part="pagination" role="tablist" class="carousel__pagination" aria-controls="scroll-container">
                ${Ci($i(s),d=>{const c=d===a;return g`
                    <button
                      part="pagination-item ${c?"pagination-item--active":""}"
                      class="${T({"carousel__pagination-item":!0,"carousel__pagination-item--active":c})}"
                      role="tab"
                      aria-selected="${c?"true":"false"}"
                      aria-label="${this.localize.term("goToSlide",d+1,s)}"
                      tabindex=${c?"0":"-1"}
                      @click=${()=>this.goToSlide(d*t)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};j.styles=[I,ki];j.dependencies={"sl-icon":st};i([o({type:Boolean,reflect:!0})],j.prototype,"loop",2);i([o({type:Boolean,reflect:!0})],j.prototype,"navigation",2);i([o({type:Boolean,reflect:!0})],j.prototype,"pagination",2);i([o({type:Boolean,reflect:!0})],j.prototype,"autoplay",2);i([o({type:Number,attribute:"autoplay-interval"})],j.prototype,"autoplayInterval",2);i([o({type:Number,attribute:"slides-per-page"})],j.prototype,"slidesPerPage",2);i([o({type:Number,attribute:"slides-per-move"})],j.prototype,"slidesPerMove",2);i([o()],j.prototype,"orientation",2);i([o({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],j.prototype,"mouseDragging",2);i([k(".carousel__slides")],j.prototype,"scrollContainer",2);i([k(".carousel__pagination")],j.prototype,"paginationContainer",2);i([C()],j.prototype,"activeSlide",2);i([C()],j.prototype,"scrolling",2);i([C()],j.prototype,"dragging",2);i([Gt({passive:!0})],j.prototype,"handleScroll",1);i([x("loop",{waitUntilFirstUpdate:!0}),x("slidesPerPage",{waitUntilFirstUpdate:!0})],j.prototype,"initializeSlides",1);i([x("activeSlide")],j.prototype,"handleSlideChange",1);i([x("slidesPerMove")],j.prototype,"updateSlidesSnap",1);i([x("autoplay")],j.prototype,"handleAutoplayChange",1);j.define("sl-carousel");var Si=(t,e)=>{let s=0;return function(...a){window.clearTimeout(s),s=window.setTimeout(()=>{t.call(this,...a)},e)}},Ne=(t,e,s)=>{const a=t[e];t[e]=function(...r){a.call(this,...r),s.call(this,a,...r)}};(()=>{if(typeof window>"u")return;if(!("onscrollend"in window)){const e=new Set,s=new WeakMap,a=l=>{for(const n of l.changedTouches)e.add(n.identifier)},r=l=>{for(const n of l.changedTouches)e.delete(n.identifier)};document.addEventListener("touchstart",a,!0),document.addEventListener("touchend",r,!0),document.addEventListener("touchcancel",r,!0),Ne(EventTarget.prototype,"addEventListener",function(l,n){if(n!=="scrollend")return;const d=Si(()=>{e.size?d():this.dispatchEvent(new Event("scrollend"))},100);l.call(this,"scroll",d,{passive:!0}),s.set(this,d)}),Ne(EventTarget.prototype,"removeEventListener",function(l,n){if(n!=="scrollend")return;const d=s.get(this);d&&l.call(this,"scroll",d,{passive:!0})})}})();var zi=A`
  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`,Ge=class extends ${connectedCallback(){super.connectedCallback(),this.setAttribute("role","group")}render(){return g` <slot></slot> `}};Ge.styles=[I,zi];Ge.define("sl-carousel-item");Pt.define("sl-button-group");var Ai=A`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,Ut=class extends ${constructor(){super(...arguments),this.localize=new R(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll("[id]")].forEach(s=>s.removeAttribute("id")),e.setAttribute("data-default",""),e.slot="separator",e}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()==="sl-breadcrumb-item");t.forEach((e,s)=>{const a=e.querySelector('[slot="separator"]');a===null?e.append(this.getSeparator()):a.hasAttribute("data-default")&&a.replaceWith(this.getSeparator()),s===t.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),g`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};Ut.styles=[I,Ai];Ut.dependencies={"sl-icon":st};i([k("slot")],Ut.prototype,"defaultSlot",2);i([k('slot[name="separator"]')],Ut.prototype,"separatorSlot",2);i([o()],Ut.prototype,"label",2);Ut.define("sl-breadcrumb");var Ii=A`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,te=class extends ${constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return g`
      <span
        part="base"
        class=${T({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};te.styles=[I,Ii];i([o({reflect:!0})],te.prototype,"variant",2);i([o({type:Boolean,reflect:!0})],te.prototype,"pill",2);i([o({type:Boolean,reflect:!0})],te.prototype,"pulse",2);te.define("sl-badge");var Ti=A`
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`,Et=class extends ${constructor(){super(...arguments),this.hasSlotController=new kt(this,"prefix","suffix"),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){const t=this.defaultSlot.assignedElements({flatten:!0}).filter(e=>e.tagName.toLowerCase()==="sl-dropdown").length>0;if(this.href){this.renderType="link";return}if(t){this.renderType="dropdown";return}this.renderType="button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return g`
      <div
        part="base"
        class=${T({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${this.renderType==="link"?g`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${L(this.target?this.target:void 0)}"
                rel=${L(this.target?this.rel:void 0)}
              >
                <slot @slotchange=${this.handleSlotChange}></slot>
              </a>
            `:""}
        ${this.renderType==="button"?g`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            `:""}
        ${this.renderType==="dropdown"?g`
              <div part="label" class="breadcrumb-item__label breadcrumb-item__label--drop-down">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </div>
            `:""}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};Et.styles=[I,Ti];i([k("slot:not([name])")],Et.prototype,"defaultSlot",2);i([C()],Et.prototype,"renderType",2);i([o()],Et.prototype,"href",2);i([o()],Et.prototype,"target",2);i([o()],Et.prototype,"rel",2);i([x("href",{waitUntilFirstUpdate:!0})],Et.prototype,"hrefChanged",1);Et.define("sl-breadcrumb-item");var Ei=A`
  :host {
    display: contents;
  }
`;const Di=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],Li=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],Mi=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],Oi=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],Vi=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Pi=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Fi=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Ri=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Bi=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Hi=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ni=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],Ui=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],qi=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ki=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],ji=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Wi=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Yi=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],Xi=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],Gi=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],Qi=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],Zi=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],Ji=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],ta=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],ea=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],sa=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],ia=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],aa=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],ra=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],oa=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],la=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],na=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],ca=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],da=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ha=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ua=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],pa=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],fa=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ma=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ga=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ba=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],va=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],ya=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],_a=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],xa=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],wa=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],ka=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],Ca=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],$a=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],Sa=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],za=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],Aa=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],Ia=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],Ta=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],Ea=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],Da=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],La=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],Ma=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],Oa=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],Va=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Pa=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],Fa=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],Ra=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],Ba=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Ha=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Na=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],Ua=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],qa=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Ka=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],ja=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Wa=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Ya=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],Xa=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],Ga=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],Qa=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],Za=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],Ja=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],tr=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],er=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],sr=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],ir=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],ar=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],rr=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],or=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],lr=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],nr=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],cr=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],dr=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],hr=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],ur=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],pr=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],fr=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],mr=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],gr=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],br=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],vr=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],yr=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],_r=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],xr=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Qe={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},wr=Object.freeze(Object.defineProperty({__proto__:null,backInDown:Ki,backInLeft:ji,backInRight:Wi,backInUp:Yi,backOutDown:Xi,backOutLeft:Gi,backOutRight:Qi,backOutUp:Zi,bounce:Di,bounceIn:Ji,bounceInDown:ta,bounceInLeft:ea,bounceInRight:sa,bounceInUp:ia,bounceOut:aa,bounceOutDown:ra,bounceOutLeft:oa,bounceOutRight:la,bounceOutUp:na,easings:Qe,fadeIn:ca,fadeInBottomLeft:da,fadeInBottomRight:ha,fadeInDown:ua,fadeInDownBig:pa,fadeInLeft:fa,fadeInLeftBig:ma,fadeInRight:ga,fadeInRightBig:ba,fadeInTopLeft:va,fadeInTopRight:ya,fadeInUp:_a,fadeInUpBig:xa,fadeOut:wa,fadeOutBottomLeft:ka,fadeOutBottomRight:Ca,fadeOutDown:$a,fadeOutDownBig:Sa,fadeOutLeft:za,fadeOutLeftBig:Aa,fadeOutRight:Ia,fadeOutRightBig:Ta,fadeOutTopLeft:Ea,fadeOutTopRight:Da,fadeOutUp:La,fadeOutUpBig:Ma,flash:Li,flip:Oa,flipInX:Va,flipInY:Pa,flipOutX:Fa,flipOutY:Ra,headShake:Mi,heartBeat:Oi,hinge:nr,jackInTheBox:cr,jello:Vi,lightSpeedInLeft:Ba,lightSpeedInRight:Ha,lightSpeedOutLeft:Na,lightSpeedOutRight:Ua,pulse:Pi,rollIn:dr,rollOut:hr,rotateIn:qa,rotateInDownLeft:Ka,rotateInDownRight:ja,rotateInUpLeft:Wa,rotateInUpRight:Ya,rotateOut:Xa,rotateOutDownLeft:Ga,rotateOutDownRight:Qa,rotateOutUpLeft:Za,rotateOutUpRight:Ja,rubberBand:Fi,shake:Ri,shakeX:Bi,shakeY:Hi,slideInDown:tr,slideInLeft:er,slideInRight:sr,slideInUp:ir,slideOutDown:ar,slideOutLeft:rr,slideOutRight:or,slideOutUp:lr,swing:Ni,tada:Ui,wobble:qi,zoomIn:ur,zoomInDown:pr,zoomInLeft:fr,zoomInRight:mr,zoomInUp:gr,zoomOut:br,zoomOutDown:vr,zoomOutLeft:yr,zoomOutRight:_r,zoomOutUp:xr},Symbol.toStringTag,{value:"Module"}));var Q=class extends ${constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var t,e;return(e=(t=this.animation)==null?void 0:t.currentTime)!=null?e:0}set currentTime(t){this.animation&&(this.animation.currentTime=t)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var t,e;const s=(t=Qe[this.easing])!=null?t:this.easing,a=(e=this.keyframes)!=null?e:wr[this.name],l=(await this.defaultSlot).assignedElements()[0];return!l||!a?!1:(this.destroyAnimation(),this.animation=l.animate(a,{delay:this.delay,direction:this.direction,duration:this.duration,easing:s,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var t;(t=this.animation)==null||t.cancel()}finish(){var t;(t=this.animation)==null||t.finish()}render(){return g` <slot @slotchange=${this.handleSlotChange}></slot> `}};Q.styles=[I,Ei];i([us("slot")],Q.prototype,"defaultSlot",2);i([o()],Q.prototype,"name",2);i([o({type:Boolean,reflect:!0})],Q.prototype,"play",2);i([o({type:Number})],Q.prototype,"delay",2);i([o()],Q.prototype,"direction",2);i([o({type:Number})],Q.prototype,"duration",2);i([o()],Q.prototype,"easing",2);i([o({attribute:"end-delay",type:Number})],Q.prototype,"endDelay",2);i([o()],Q.prototype,"fill",2);i([o({type:Number})],Q.prototype,"iterations",2);i([o({attribute:"iteration-start",type:Number})],Q.prototype,"iterationStart",2);i([o({attribute:!1})],Q.prototype,"keyframes",2);i([o({attribute:"playback-rate",type:Number})],Q.prototype,"playbackRate",2);i([x(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],Q.prototype,"handleAnimationChange",1);i([x("play")],Q.prototype,"handlePlayChange",1);i([x("playbackRate")],Q.prototype,"handlePlaybackRateChange",1);Q.define("sl-animation");var kr=A`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,St=class extends ${constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const t=g`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;let e=g``;return this.initials?e=g`<div part="initials" class="avatar__initials">${this.initials}</div>`:e=g`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,g`
      <div
        part="base"
        class=${T({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};St.styles=[I,kr];St.dependencies={"sl-icon":st};i([C()],St.prototype,"hasError",2);i([o()],St.prototype,"image",2);i([o()],St.prototype,"label",2);i([o()],St.prototype,"initials",2);i([o()],St.prototype,"loading",2);i([o({reflect:!0})],St.prototype,"shape",2);i([x("image")],St.prototype,"handleImageChange",1);St.define("sl-avatar");var Cr=A`
  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`,xt=class extends ${constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const t=document.createElement("canvas"),{width:e,height:s}=this.animatedImage;t.width=e,t.height=s,t.getContext("2d").drawImage(this.animatedImage,0,0,e,s),this.frozenFrame=t.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return g`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?"false":"true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?g`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            `:""}
      </div>
    `}};xt.styles=[I,Cr];xt.dependencies={"sl-icon":st};i([k(".animated-image__animated")],xt.prototype,"animatedImage",2);i([C()],xt.prototype,"frozenFrame",2);i([C()],xt.prototype,"isLoaded",2);i([o()],xt.prototype,"src",2);i([o()],xt.prototype,"alt",2);i([o({type:Boolean,reflect:!0})],xt.prototype,"play",2);i([x("play",{waitUntilFirstUpdate:!0})],xt.prototype,"handlePlayChange",1);i([x("src")],xt.prototype,"handleSrcChange",1);xt.define("sl-animated-image");hs("mana",{resolver:t=>`https://cdn.jsdelivr.net/npm/mana-font@latest/svg/${t.replace(/^ms-/,"")}.svg`,mutator:t=>{t.setAttribute("fill","currentColor"),t.setAttribute("width","16px"),t.setAttribute("height","16px")}});
//# sourceMappingURL=mana-icon-BcFlKUxF.js.map
