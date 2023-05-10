export class UpdatedCustomField {
    error: string;
    response: FormData[];
}

export class FormData {
    tabId: string;
    tabName: string;
    tabSequence: number;
    createdOn: Date;
    isDeleted: boolean;
    field: Field[];
}

export class Field {
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
    isDeleted: boolean;
    isFieldGroup: boolean;
    groupParserName: string;
    toolTipSetting: ToolTipSetting[]
}

export class ToolTipSetting {
    showToolTip: boolean;
    toolTipText: string;
    toolTipIcon: boolean
}