
module.exports = ({ env }) => ({
  // enable a plugin that doesn't require any configuration
  i18n: true,
  ckeditor5: {
    enabled: true,
  },
  //   enabled: true,
  // //   // config: {
  // //   //   toolbar:{
  // //   //       // styles:``,
  // //   //       // field:{},
  // //   //       // editorConfig:{}
  // //   //   },
  // //   //   custom:{
          
  // //   //       /* Styles for this specific editor.
  // //   //       This will be passed into the editor's parent container. */
    
  // //   //       styles:`
  // //   //       //     --ck-focus-ring:3px dashed #5CB176;
    
  // //   //       //     .ck.ck-content.ck-editor__editable {
  // //   //       //       &.ck-focused:not(.ck-editor__nested-editable) {
  // //   //       //         border: var(--ck-focus-ring) !important;
  // //   //       //       }
  // //   //       //     }
  // //   //       //     .ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline.ck-blurred{
  // //   //       //       min-height: 400px;
  // //   //       //       max-height: 400px;
  // //   //       //     }
  // //   //       //     .ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline.ck-focused{
  // //   //       //       min-height: 400px;
  // //   //       //       max-height: 1700px;
  // //   //       //     }
  // //   //       `,
    
  // //   //       /* Custom field option */
  // //   //       field: {
  // //   //           key: "custom",
  // //   //           value: "custom",
  // //   //           metadatas: {
  // //   //             intlLabel: {
  // //   //               id: "ckeditor5.preset.custom.label",
  // //   //               defaultMessage: "Custom version",
  // //   //             },
  // //   //           },
  // //   //       },
  // //   //       /* CKEditor configuration */
  // //   //       editorConfig:{
  // //   //           /* All available built-in plugins
  // //   //           you can find in admin/src/components/Input/CKEditor/configs/base.js */
  // //   //           // plugins: [
  // //   //           //     CKEditor5.autoformat.Autoformat,
  // //   //           //     CKEditor5.basicStyles.Bold,
  // //   //           //     CKEditor5.basicStyles.Italic,
  // //   //           //     CKEditor5.essentials.Essentials,
  // //   //           //     CKEditor5.heading.Heading,
  // //   //           //     CKEditor5.image.Image,
  // //   //           //     CKEditor5.image.ImageCaption,
  // //   //           //     CKEditor5.image.ImageStyle,
  // //   //           //     CKEditor5.image.ImageToolbar,
  // //   //           //     CKEditor5.image.ImageUpload,
  // //   //           //     CKEditor5.indent.Indent,
  // //   //           //     CKEditor5.link.Link,
  // //   //           //     CKEditor5.list.List,
  // //   //           //     CKEditor5.paragraph.Paragraph,
  // //   //           //     CKEditor5.pasteFromOffice.PasteFromOffice,
  // //   //           //     CKEditor5.table.Table,
  // //   //           //     CKEditor5.table.TableToolbar,
  // //   //           //     CKEditor5.table.TableColumnResize,
  // //   //           //     CKEditor5.table.TableCaption,
  // //   //           //     CKEditor5.strapiPlugins.StrapiMediaLib,
  // //   //           //     CKEditor5.strapiPlugins.StrapiUploadAdapter,
  // //   //           //   ],
    
  // //   //             /* By default, for plugin's UI will use
  // //   //             the language defined in this file
  // //   //             or the preferred language from strapi's user config
  // //   //             and 'en' as a fallback.
  // //   //             language.ui -> preferred language -> 'en' */
    
  // //   //             /* For content it will use language based on i18n (if! ignorei18n)
  // //   //             or language.content defined here
  // //   //             and it will use UI language as a fallback.
  // //   //             ignorei18n ? language.content : i18n; -> language.ui */
    
  // //   //             language:{
  // //   //               // ignorei18n: true,
  // //   //               // ui:'he',
  // //   //               // content:'he'
  // //   //             },
  // //   //             toolbar: [
  // //   //               'heading',
  // //   //               '|',
  // //   //               'bold', 'italic', 'link', 'bulletedList', 'numberedList',
  // //   //               '|',
  // //   //               'strapiMediaLib', 'insertTable',
  // //   //               '|',
  // //   //               'undo', 'redo'
  // //   //             ],
  // //   //             heading: {
  // //   //               options: [
  // //   //                 { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
  // //   //                 { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
  // //   //                 { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
  // //   //                 { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
  // //   //                 { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
  // //   //               ]
  // //   //             },
  // //   //             image: {
  // //   //               toolbar: [
  // //   //                 'imageStyle:inline',
  // //   //                 'imageStyle:block',
  // //   //                 'imageStyle:side',
  // //   //                 '|',
  // //   //                 'toggleImageCaption',
  // //   //                 'imageTextAlternative'
  // //   //               ]
  // //   //             },
  // //   //             table: {
  // //   //               contentToolbar: [
  // //   //                 'tableColumn',
  // //   //                 'tableRow',
  // //   //                 'mergeTableCells',
  // //   //                 '|',
  // //   //                 'toggleTableCaption'
  // //   //               ]
  // //   //             }
  // //   //       }
  // //   //   }
  // //   // },
  // //   /* Here you can customize the plugin's theme.
  // //   This will be passed as "createGlobalStyle". */
  // //   // theme: {
  // //   //   // common:``,
  // //   //   // light:``,
  // //   //   // dark:``,
  // //   //   // additional:``
  // //   // },
  // // },

  // // enable a custom plugin
  // // myplugin: {
  // //   // my-plugin is going to be the internal name used for this plugin
  // //   enabled: true,
  // //   resolve: './src/plugins/my-local-plugin',
  // //   config: {
  // //     // user plugin config goes here
  // //   },
  // },

  // jwt
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '7d',
      },
    },
  },
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.gmail.com'),
        port: env('SMTP_PORT', 465),
        secure: env('SMTP_SECURE', false),
        auth: {
          user: env('GMAIL_USER'),
          pass: env('GMAIL_PASSWORD'),
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: 'noreply@recipee.com',
        defaultReplyTo: 'noreply@recipee.com',
      },
    },
  },
});