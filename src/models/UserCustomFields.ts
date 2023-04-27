export class UserCustomFields {
    id: string;
    tabIndex: number;
    tabName: string;
    toolTipSetting: ToolTipSetting;
    localization: Localization;
    fields: Fields[];
    links: Links;
}

export class ToolTipSetting {
    showToolTip: boolean;
    toolTipText: string;
    toolTipIcon: boolean
}

export class Localization {
    enUS: string;
    frFR: string;
}

export class Fields {
    id: string;
    fieldSequence: number;
    parserName: string;
    displayName: string;
    fieldType: string;
    defaultValue: string;
    required: boolean;
    charMin: number;
    charMax: number;
    createdOn: Date;
    updatedOn: Date;
    isFieldGroup: true;
    groupParserName: string;
    toolTipSetting: ToolTipSetting;
    localization: Localization;
}

export class Links {
    companyId: string;
    companyName: string;
    overRidenFields: OverRidenFields[];
}

export class OverRidenFields {
    fieldId: string;
    parserName: string;
    displayName: string;
    required: boolean;
}