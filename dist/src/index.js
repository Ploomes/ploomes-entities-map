"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entities = void 0;
exports.entities = {
    CONTACTS: {
        "Id": 1,
        "Name": "Cliente",
        "ApiUrl": "Contacts",
        "DefaultPropertyName": "Contact",
        "DisplayPropertyName": "Name",
        "Icon": null,
        "Importable": true,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": true
    },
    DEALS: {
        "Id": 2,
        "Name": "Negócio",
        "ApiUrl": "Deals",
        "DefaultPropertyName": null,
        "DisplayPropertyName": "Title",
        "Icon": "fa-money-bill-wave",
        "Importable": true,
        "QuickFormId": null,
        "SingularUnitName": "Negócio",
        "PluralUnitName": "Negócios",
        "GenderId": 1,
        "IsLoggedResponse": true
    },
    LEADS: {
        "Id": 3,
        "Name": "Lead",
        "ApiUrl": "Leads",
        "DefaultPropertyName": null,
        "DisplayPropertyName": null,
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": true
    },
    ORDERS: {
        "Id": 4,
        "Name": "Venda",
        "ApiUrl": "Orders",
        "DefaultPropertyName": null,
        "DisplayPropertyName": "OrderNumber",
        "Icon": "fa-money-check-edit-alt",
        "Importable": true,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": true
    },
    ORDERS_SECTIONS: {
        "Id": 5,
        "Name": "Bloco",
        "ApiUrl": "Orders@Sections",
        "DefaultPropertyName": null,
        "DisplayPropertyName": null,
        "Icon": "fa-folder-tree",
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    QUOTES: {
        "Id": 7,
        "Name": "Proposta",
        "ApiUrl": "Quotes",
        "DefaultPropertyName": null,
        "DisplayPropertyName": "QuoteNumber",
        "Icon": "fa-file-invoice-dollar",
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": true
    },
    QUOTES_SECTIONS: {
        "Id": 8,
        "Name": "Bloco",
        "ApiUrl": "Quotes@Sections",
        "DefaultPropertyName": null,
        "DisplayPropertyName": null,
        "Icon": "fa-folder-tree",
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    _VISIT: {
        "Id": 9,
        "Name": "Visita",
        "ApiUrl": null,
        "DefaultPropertyName": null,
        "DisplayPropertyName": null,
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    PRODUCTS: {
        "Id": 10,
        "Name": "Produto",
        "ApiUrl": "Products",
        "DefaultPropertyName": "Product",
        "DisplayPropertyName": "Name",
        "Icon": "icon-params",
        "Importable": true,
        "QuickFormId": 2439619,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": true
    },
    PRODUCTS_GROUPS: {
        "Id": 11,
        "Name": "Grupo do Produto",
        "ApiUrl": "Products@Groups",
        "DefaultPropertyName": null,
        "DisplayPropertyName": "Name",
        "Icon": null,
        "Importable": false,
        "QuickFormId": 2439618,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    TASKS: {
        "Id": 12,
        "Name": "Tarefa",
        "ApiUrl": "Tasks",
        "DefaultPropertyName": "Task",
        "DisplayPropertyName": "Title",
        "Icon": null,
        "Importable": true,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": true
    },
    _RESPONSIBLE: {
        "Id": 13,
        "Name": "Responsável",
        "ApiUrl": null,
        "DefaultPropertyName": null,
        "DisplayPropertyName": null,
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    QUOTES_PRODUCTS: {
        "Id": 14,
        "Name": "Produto da proposta",
        "ApiUrl": "Quotes@Products",
        "DefaultPropertyName": null,
        "DisplayPropertyName": null,
        "Icon": "fa-box-usd",
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    YOUR_COMPANY: {
        "Id": 15,
        "Name": "Sua Empresa",
        "ApiUrl": null,
        "DefaultPropertyName": null,
        "DisplayPropertyName": "Name",
        "Icon": "icon-note",
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    _CLIENT_CONTACT: {
        "Id": 16,
        "Name": "Contato do Cliente",
        "ApiUrl": null,
        "DefaultPropertyName": null,
        "DisplayPropertyName": null,
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    CURRENCIES: {
        "Id": 17,
        "Name": "Moeda",
        "ApiUrl": "Currencies",
        "DefaultPropertyName": null,
        "DisplayPropertyName": "Symbol",
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    _CLIENT_ADDRESS: {
        "Id": 18,
        "Name": "Endereço do cliente",
        "ApiUrl": null,
        "DefaultPropertyName": null,
        "DisplayPropertyName": null,
        "Icon": null,
        "Importable": true,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    _SIGNATURE: {
        "Id": 19,
        "Name": "Assinatura",
        "ApiUrl": null,
        "DefaultPropertyName": null,
        "DisplayPropertyName": null,
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    ORDERS_PRODUCTS: {
        "Id": 20,
        "Name": "Produto da venda",
        "ApiUrl": "Orders@Products",
        "DefaultPropertyName": null,
        "DisplayPropertyName": null,
        "Icon": "fa-box-usd",
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    QUOTES_PRODUCTS_PARTS: {
        "Id": 21,
        "Name": "Parte do Produto",
        "ApiUrl": "Quotes@Products@Parts",
        "DefaultPropertyName": null,
        "DisplayPropertyName": null,
        "Icon": "fa-clipboard-list-check",
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    SELF: {
        "Id": 22,
        "Name": "Criador",
        "ApiUrl": "Self",
        "DefaultPropertyName": null,
        "DisplayPropertyName": "Name",
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    TAGS: {
        "Id": 23,
        "Name": "Marcador",
        "ApiUrl": "Tags",
        "DefaultPropertyName": "Tag",
        "DisplayPropertyName": "Name",
        "Icon": null,
        "Importable": false,
        "QuickFormId": 2439617,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    USERS: {
        "Id": 24,
        "Name": "Usuário",
        "ApiUrl": "Users",
        "DefaultPropertyName": "User",
        "DisplayPropertyName": "Name",
        "Icon": "icon-person",
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": true
    },
    CITIES: {
        "Id": 25,
        "Name": "Cidade",
        "ApiUrl": "Cities",
        "DefaultPropertyName": null,
        "DisplayPropertyName": "Name",
        "Icon": null,
        "Importable": false,
        "QuickFormId": 2439616,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    CITIES_COUNTRIES_STATES: {
        "Id": 26,
        "Name": "Estado",
        "ApiUrl": "Cities@Countries@States",
        "DefaultPropertyName": null,
        "DisplayPropertyName": "Short",
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    CITIES_COUNTRIES: {
        "Id": 27,
        "Name": "País",
        "ApiUrl": "Cities@Countries",
        "DefaultPropertyName": null,
        "DisplayPropertyName": "Short",
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    PHONE_NUMBER: {
        "Id": 28,
        "Name": "Telefone",
        "ApiUrl": null,
        "DefaultPropertyName": null,
        "DisplayPropertyName": "PhoneNumber",
        "Icon": null,
        "Importable": true,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    PHONE_TYPES: {
        "Id": 29,
        "Name": "Tipo de telefone",
        "ApiUrl": "PhoneTypes",
        "DefaultPropertyName": null,
        "DisplayPropertyName": "Name",
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    TEAMS: {
        "Id": 30,
        "Name": "Equipe",
        "ApiUrl": "Teams",
        "DefaultPropertyName": "Team",
        "DisplayPropertyName": "Name",
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    DEALS_STAGES: {
        "Id": 31,
        "Name": "Estágio",
        "ApiUrl": "Deals@Stages",
        "DefaultPropertyName": null,
        "DisplayPropertyName": "Name",
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    _STAGES: {
        "Id": 32,
        "Name": "Estágios",
        "ApiUrl": null,
        "DefaultPropertyName": null,
        "DisplayPropertyName": null,
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    DEALS_LOSS_REASONS: {
        "Id": 33,
        "Name": "Motivos de perda",
        "ApiUrl": "Deals@LossReasons",
        "DefaultPropertyName": null,
        "DisplayPropertyName": "Name",
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    QUOTES_INSTALLMENTS: {
        "Id": 34,
        "Name": "Parcela da proposta",
        "ApiUrl": "Quotes@Installments",
        "DefaultPropertyName": null,
        "DisplayPropertyName": null,
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    CONTACTS_ORIGINS: {
        "Id": 35,
        "Name": "Origem do cliente",
        "ApiUrl": "Contacts@Origins",
        "DefaultPropertyName": null,
        "DisplayPropertyName": "Name",
        "Icon": null,
        "Importable": false,
        "QuickFormId": 2439612,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    INTERACTION_RECORDS: {
        "Id": 36,
        "Name": "Registro de Interação",
        "ApiUrl": "InteractionRecords",
        "DefaultPropertyName": null,
        "DisplayPropertyName": "Content",
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    CONTACTS_LINES_OF_BUSINESS: {
        "Id": 37,
        "Name": "Segmento do cliente",
        "ApiUrl": "Contacts@LinesOfBusiness",
        "DefaultPropertyName": null,
        "DisplayPropertyName": "Name",
        "Icon": null,
        "Importable": false,
        "QuickFormId": 2439611,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    ROLES: {
        "Id": 38,
        "Name": "Cargo",
        "ApiUrl": "Roles",
        "DefaultPropertyName": null,
        "DisplayPropertyName": "Name",
        "Icon": null,
        "Importable": false,
        "QuickFormId": 2439613,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    DEPARTMENTS: {
        "Id": 39,
        "Name": "Departamento",
        "ApiUrl": "Departments",
        "DefaultPropertyName": null,
        "DisplayPropertyName": "Name",
        "Icon": null,
        "Importable": false,
        "QuickFormId": 2439614,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    CONTACTS_NUMBERS_OF_EMPLOYEES: {
        "Id": 40,
        "Name": "Número de funcionário",
        "ApiUrl": "Contacts@NumbersOfEmployees",
        "DefaultPropertyName": null,
        "DisplayPropertyName": "Name",
        "Icon": null,
        "Importable": false,
        "QuickFormId": 2439615,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    PRODUCTS_PARTS: {
        "Id": 41,
        "Name": "Vínculo de produtos",
        "ApiUrl": "Products@Parts",
        "DefaultPropertyName": null,
        "DisplayPropertyName": "Name",
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    USERS_PROFILES: {
        "Id": 42,
        "Name": "Perfil de usuário",
        "ApiUrl": "Users@Profiles",
        "DefaultPropertyName": null,
        "DisplayPropertyName": "Name",
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    PRODUCTS_FAMILIES: {
        "Id": 43,
        "Name": "Família do produto",
        "ApiUrl": "Products@Families",
        "DefaultPropertyName": null,
        "DisplayPropertyName": "Name",
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    DEALS_PIPELINES: {
        "Id": 44,
        "Name": "Funil",
        "ApiUrl": "Deals@Pipelines",
        "DefaultPropertyName": null,
        "DisplayPropertyName": "Name",
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": "Funil",
        "PluralUnitName": "Funis",
        "GenderId": 1,
        "IsLoggedResponse": null
    },
    ORDERS_STAGES: {
        "Id": 45,
        "Name": "Estágios da venda",
        "ApiUrl": "Orders@Stages",
        "DefaultPropertyName": null,
        "DisplayPropertyName": "Name",
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    CONTACTS_RELATIONSHIPS: {
        "Id": 46,
        "Name": "Tipo de relação de cliente",
        "ApiUrl": "Contacts@Relationships",
        "DefaultPropertyName": null,
        "DisplayPropertyName": "Name",
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    CONTACTS_STATUS: {
        "Id": 47,
        "Name": "Status de cliente",
        "ApiUrl": "Contacts@Status",
        "DefaultPropertyName": null,
        "DisplayPropertyName": "Name",
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    CONTACTS_CLASSES: {
        "Id": 48,
        "Name": "Classe de cliente",
        "ApiUrl": "Contacts@Classes",
        "DefaultPropertyName": null,
        "DisplayPropertyName": "Name",
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    CONTACTS_TYPES: {
        "Id": 49,
        "Name": "Tipo de cliente",
        "ApiUrl": "Contacts@Types",
        "DefaultPropertyName": null,
        "DisplayPropertyName": "Name",
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    DOCUMENT_TEMPLATES: {
        "Id": 50,
        "Name": "Modelo do documento",
        "ApiUrl": "DocumentTemplates",
        "DefaultPropertyName": null,
        "DisplayPropertyName": "Name",
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    PHONE: {
        "Id": 51,
        "Name": "Telefone",
        "ApiUrl": null,
        "DefaultPropertyName": null,
        "DisplayPropertyName": "PhoneNumber",
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    LEADS_STATUS: {
        "Id": 52,
        "Name": "Situação",
        "ApiUrl": "Leads@Status",
        "DefaultPropertyName": null,
        "DisplayPropertyName": "Name",
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    QUOTES_APPROVAL_STATUS: {
        "Id": 53,
        "Name": "Situação da aprovação",
        "ApiUrl": "Quotes@ApprovalStatus",
        "DefaultPropertyName": null,
        "DisplayPropertyName": "Name",
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    LEADS_DISCARD_REASONS: {
        "Id": 54,
        "Name": "Motivo de descarte",
        "ApiUrl": "Leads@DiscardReasons",
        "DefaultPropertyName": null,
        "DisplayPropertyName": "Name",
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    MESSAGES: {
        "Id": 55,
        "Name": "Informe",
        "ApiUrl": "Messages",
        "DefaultPropertyName": null,
        "DisplayPropertyName": null,
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    EMAILS: {
        "Id": 56,
        "Name": "E-mail",
        "ApiUrl": "Emails",
        "DefaultPropertyName": null,
        "DisplayPropertyName": null,
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    COMMENTS: {
        "Id": 57,
        "Name": "Comentário",
        "ApiUrl": "Comments",
        "DefaultPropertyName": null,
        "DisplayPropertyName": null,
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    ATTACHMENTS: {
        "Id": 58,
        "Name": "Anexo",
        "ApiUrl": "Attachments",
        "DefaultPropertyName": null,
        "DisplayPropertyName": null,
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    DEALS_STATUS: {
        "Id": 59,
        "Name": "Situação",
        "ApiUrl": "Deals@Status",
        "DefaultPropertyName": null,
        "DisplayPropertyName": "Name",
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    EMAILS_RECIPIENTS: {
        "Id": 60,
        "Name": "Destinatário de e-mail",
        "ApiUrl": "Emails@Recipients",
        "DefaultPropertyName": null,
        "DisplayPropertyName": null,
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    EMAILS_STATUS: {
        "Id": 61,
        "Name": "Situação de e-mail",
        "ApiUrl": "Emails@Status",
        "DefaultPropertyName": null,
        "DisplayPropertyName": "Name",
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    EMAILS_TEMPLATES: {
        "Id": 62,
        "Name": "Template de e-mail",
        "ApiUrl": "Emails@Templates",
        "DefaultPropertyName": null,
        "DisplayPropertyName": null,
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    TASKS_TYPES: {
        "Id": 63,
        "Name": "Tipo",
        "ApiUrl": "Tasks@Types",
        "DefaultPropertyName": null,
        "DisplayPropertyName": "Name",
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    PANEL: {
        "Id": 64,
        "Name": "Painel",
        "ApiUrl": "Panel",
        "DefaultPropertyName": null,
        "DisplayPropertyName": null,
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    INTEGRATIONS_FIELDS_OPTIONSTABLE_OPTIONS: {
        "Id": 65,
        "Name": "Opções",
        "ApiUrl": "Integrations@Fields@OptionsTable@Options",
        "DefaultPropertyName": null,
        "DisplayPropertyName": null,
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    DOCUMENTS: {
        "Id": 66,
        "Name": "Documento",
        "ApiUrl": "Documents",
        "DefaultPropertyName": null,
        "DisplayPropertyName": "Name",
        "Icon": "fa-file-alt",
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": true
    },
    DOCUMENTS_SECTIONS: {
        "Id": 67,
        "Name": "Bloco",
        "ApiUrl": "Documents@Sections",
        "DefaultPropertyName": null,
        "DisplayPropertyName": null,
        "Icon": "fa-folder-tree",
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    DOCUMENTS_PRODUCTS: {
        "Id": 68,
        "Name": "Produto do documento",
        "ApiUrl": "Documents@Products",
        "DefaultPropertyName": null,
        "DisplayPropertyName": null,
        "Icon": "fa-box-usd",
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    ORDERS_PRODUCTS_PARTS: {
        "Id": 69,
        "Name": "Parte do Produto",
        "ApiUrl": "Orders@Products@Parts",
        "DefaultPropertyName": null,
        "DisplayPropertyName": null,
        "Icon": "fa-clipboard-list-check",
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    DOCUMENTS_PRODUCTS_PARTS: {
        "Id": 70,
        "Name": "Parte do Produto",
        "ApiUrl": "Documents@Products@Parts",
        "DefaultPropertyName": null,
        "DisplayPropertyName": null,
        "Icon": "fa-clipboard-list-check",
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    ORDERS_INSTALLMENTS: {
        "Id": 71,
        "Name": "Parcela da venda",
        "ApiUrl": "Orders@Installments",
        "DefaultPropertyName": null,
        "DisplayPropertyName": null,
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    DOCUMENTS_INSTALLMENTS: {
        "Id": 72,
        "Name": "Parcela do documento",
        "ApiUrl": "Documents@Installments",
        "DefaultPropertyName": null,
        "DisplayPropertyName": null,
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    RELATED_PEOPLE: {
        "Id": 73,
        "Name": "Contato relacionado",
        "ApiUrl": "RelatedPeople",
        "DefaultPropertyName": null,
        "DisplayPropertyName": null,
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    ACCOUNT_INTEGRATIONS: {
        "Id": 74,
        "Name": "Integrações",
        "ApiUrl": "Account@Integrations",
        "DefaultPropertyName": null,
        "DisplayPropertyName": null,
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    CONTACTS_PRODUCTS: {
        "Id": 75,
        "Name": "Produto de cliente",
        "ApiUrl": "Contacts@Products",
        "DefaultPropertyName": "ContactProduct",
        "DisplayPropertyName": "Name",
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": "Produto de cliente",
        "PluralUnitName": "Produtos de cliente",
        "GenderId": 1,
        "IsLoggedResponse": null
    },
    PRODUCTS_LISTS: {
        "Id": 76,
        "Name": "Lista de produtos",
        "ApiUrl": "Products@Lists",
        "DefaultPropertyName": "List",
        "DisplayPropertyName": "Name",
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    FIELDS: {
        "Id": 77,
        "Name": "Campo de formulário",
        "ApiUrl": "Fields",
        "DefaultPropertyName": null,
        "DisplayPropertyName": "Name",
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    FIELDS_TYPES: {
        "Id": 80,
        "Name": "Tipo do campo",
        "ApiUrl": "Fields@Types",
        "DefaultPropertyName": null,
        "DisplayPropertyName": null,
        "Icon": null,
        "Importable": true,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    FORMS: {
        "Id": 81,
        "Name": "Formulários",
        "ApiUrl": "Forms",
        "DefaultPropertyName": null,
        "DisplayPropertyName": null,
        "Icon": null,
        "Importable": true,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    PRODUCTS_PARTS_GROUPS: {
        "Id": 83,
        "Name": "Categoria de vínculos",
        "ApiUrl": "Products@Parts@Groups",
        "DefaultPropertyName": null,
        "DisplayPropertyName": "Name",
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    WORDS: {
        "Id": 84,
        "Name": "Palavras",
        "ApiUrl": "Words",
        "DefaultPropertyName": null,
        "DisplayPropertyName": null,
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    WORDS_VERBS: {
        "Id": 85,
        "Name": "Verbos",
        "ApiUrl": "Words@Verbs",
        "DefaultPropertyName": null,
        "DisplayPropertyName": null,
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    ICONS: {
        "Id": 86,
        "Name": "Ícones",
        "ApiUrl": "Icons",
        "DefaultPropertyName": null,
        "DisplayPropertyName": null,
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    FIELDS_OPTIONS_TABLES_OPTIONS: {
        "Id": 87,
        "Name": "Opções",
        "ApiUrl": "Fields@OptionsTables@Options",
        "DefaultPropertyName": null,
        "DisplayPropertyName": null,
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    CHATS: {
        "Id": 88,
        "Name": "Chat",
        "ApiUrl": "Chats",
        "DefaultPropertyName": null,
        "DisplayPropertyName": null,
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    EMAILS_FOLDERS: {
        "Id": 89,
        "Name": "Pasta de e-mail",
        "ApiUrl": "Emails@Folders",
        "DefaultPropertyName": null,
        "DisplayPropertyName": null,
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    EMAILS_GROUPS: {
        "Id": 90,
        "Name": "Grupo de Emails",
        "ApiUrl": "Emails@Groups",
        "DefaultPropertyName": null,
        "DisplayPropertyName": null,
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    USERS_LOGS_CHANGES_CHANGES: {
        "Id": 91,
        "Name": "Registro de modificação",
        "ApiUrl": "Users@Logs@Changes@Changes",
        "DefaultPropertyName": null,
        "DisplayPropertyName": null,
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    WEBHOOKS_ACTIONS: {
        "Id": 92,
        "Name": "Ação",
        "ApiUrl": "Webhooks@Actions",
        "DefaultPropertyName": null,
        "DisplayPropertyName": "Name",
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    FIELDS_ENTITIES: {
        "Id": 93,
        "Name": "Entidade",
        "ApiUrl": "Fields@Entities",
        "DefaultPropertyName": null,
        "DisplayPropertyName": "Name",
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    FIELDS_ENTITIES_PATHS: {
        "Id": 94,
        "Name": "Caminhos",
        "ApiUrl": "Fields@Entities@Paths",
        "DefaultPropertyName": null,
        "DisplayPropertyName": null,
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    ATTACHMENTS_FOLDERS: {
        "Id": 95,
        "Name": "Pasta de anexo",
        "ApiUrl": "Attachments@Folders",
        "DefaultPropertyName": null,
        "DisplayPropertyName": null,
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": null,
        "PluralUnitName": null,
        "GenderId": null,
        "IsLoggedResponse": null
    },
    ATTACHMENTS_ITEMS: {
        "Id": 96,
        "Name": "Coleção",
        "ApiUrl": "Attachments@Items",
        "DefaultPropertyName": null,
        "DisplayPropertyName": null,
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": "Coleção",
        "PluralUnitName": "Coleções",
        "GenderId": 2,
        "IsLoggedResponse": null
    },
    FILES: {
        "Id": 97,
        "Name": "Arquivo",
        "ApiUrl": null,
        "DefaultPropertyName": null,
        "DisplayPropertyName": null,
        "Icon": null,
        "Importable": false,
        "QuickFormId": null,
        "SingularUnitName": "Arquivo",
        "PluralUnitName": "Arquivos",
        "GenderId": 1,
        "IsLoggedResponse": null
    }
};
