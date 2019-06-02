/*
Copyright DHTMLX LTD. http://www.dhtmlx.com
To use this component please contact sales@dhtmlx.com to obtain license
*/
Scheduler.plugin(function(a){a.locale={date:{month_full:"\u0421\u0442\u0443\u0434\u0437\u0435\u043d\u044c,\u041b\u044e\u0442\u044b,\u0421\u0430\u043a\u0430\u0432\u0456\u043a,\u041a\u0440\u0430\u0441\u0430\u0432\u0456\u043a,Ma\u0439,\u0427\u044d\u0440\u0432\u0435\u043d\u044c,\u041b\u0456\u043f\u0435\u043d\u044c,\u0416\u043d\u0456\u0432\u0435\u043d\u044c,\u0412\u0435\u0440\u0430\u0441\u0435\u043d\u044c,\u041a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a,\u041b\u0456\u0441\u0442\u0430\u043f\u0430\u0434,\u0421\u043d\u0435\u0436\u0430\u043d\u044c".split(","),
month_short:"\u0421\u0442\u0443\u0434\u0437,\u041b\u044e\u0442,\u0421\u0430\u043a,\u041a\u0440\u0430\u0441,Ma\u0439,\u0427\u044d\u0440,\u041b\u0456\u043f,\u0416\u043d\u0456\u0432,\u0412\u0435\u0440,\u041a\u0430\u0441\u0442,\u041b\u0456\u0441\u0442,\u0421\u043d\u0435\u0436".split(","),day_full:"\u041d\u044f\u0434\u0437\u0435\u043b\u044f,\u041f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a,\u0410\u045e\u0442\u043e\u0440\u0430\u043a,\u0421\u0435\u0440\u0430\u0434\u0430,\u0427\u0430\u0446\u0432\u0435\u0440,\u041f\u044f\u0442\u043d\u0456\u0446\u0430,\u0421\u0443\u0431\u043e\u0442\u0430".split(","),
day_short:"\u041d\u0434,\u041f\u043d,\u0410\u045e\u0442,\u0421\u0440,\u0427\u0446\u0432,\u041f\u0442,\u0421\u0431".split(",")},labels:{dhx_cal_today_button:"\u0421\u0451\u043d\u043d\u044f",day_tab:"\u0414\u0437\u0435\u043d\u044c",week_tab:"\u0422\u044b\u0434\u0437\u0435\u043d\u044c",month_tab:"\u041c\u0435\u0441\u044f\u0446",new_event:"\u041d\u043e\u0432\u0430\u044f \u043f\u0430\u0434\u0437\u0435\u044f",icon_save:"\u0417\u0430\u0445\u0430\u0432\u0430\u0446\u044c",icon_cancel:"\u0410\u0434\u043c\u044f\u043d\u0456\u0446\u044c",
icon_details:"\u0414\u044d\u0442\u0430\u043b\u0456",icon_edit:"\u0417\u043c\u044f\u043d\u0456\u0446\u044c",icon_delete:"\u0412\u044b\u0434\u0430\u043b\u0456\u0446\u044c",confirm_closing:"",confirm_deleting:"\u041f\u0430\u0434\u0437\u0435\u044f \u0431\u0443\u0434\u0437\u0435 \u0432\u044b\u0434\u0430\u043b\u0435\u043d\u0430 \u043d\u0435\u0437\u0432\u0430\u0440\u043e\u0442\u043d\u0430, \u043f\u0440\u0430\u0446\u044f\u0433\u043d\u0443\u0446\u044c?",section_description:"\u0410\u043f\u0456\u0441\u0430\u043d\u043d\u0435",
section_time:"\u041f\u0435\u0440\u044b\u044f\u0434 \u0447\u0430\u0441\u0443",full_day:"\u0423\u0432\u0435\u0441\u044c \u0434\u0437\u0435\u043d\u044c",confirm_recurring:"\u0412\u044b \u0445\u043e\u0447\u0430\u0446\u0435 \u0437\u043c\u044f\u043d\u0456\u0446\u044c \u0443\u0441\u044e \u0441\u0435\u0440\u044b\u044e \u043f\u0430\u045e\u0442\u0430\u0440\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u0430\u0434\u0437\u0435\u0439?",section_recurring:"\u041f\u0430\u045e\u0442\u0430\u0440\u044d\u043d\u043d\u0435",
button_recurring:"\u0410\u0434\u043a\u043b\u044e\u0447\u0430\u043d\u0430",button_recurring_open:"\u0423\u043a\u043b\u044e\u0447\u0430\u043d\u0430",button_edit_series:"\u0420\u044d\u0434\u0430\u0433\u0430\u0432\u0430\u0446\u044c \u0441\u0435\u0440\u044b\u044e",button_edit_occurrence:"\u0420\u044d\u0434\u0430\u0433\u0430\u0432\u0430\u0446\u044c \u0430\u0441\u043e\u0431\u043d\u0456\u043a",agenda_tab:"\u0421\u043f\u0456\u0441",date:"\u0414\u0430\u0442\u0430",description:"\u0410\u043f\u0456\u0441\u0430\u043d\u043d\u0435",
year_tab:"\u0413\u043e\u0434",week_agenda_tab:"\u0421\u043f\u0456\u0441",grid_tab:"\u0421\u043fic"}}});
