package com.dotuian.common.utils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateUtils {
    
    public static String formatDate(java.sql.Date date, String format) {
        SimpleDateFormat sdf = new SimpleDateFormat(format);
        return sdf.format(date);
    }
    
    public static String formatDate(java.util.Date date, String format) {
        SimpleDateFormat sdf = new SimpleDateFormat(format);
        return sdf.format(date);
    }
    
    public static java.util.Date parseDate(String date, String format) {
        Date result = null;
        SimpleDateFormat sdf = new SimpleDateFormat(format);
        try {
            result = sdf.parse(date);
        } catch (ParseException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return result;
    }
    
    public static java.sql.Date convertToSqlDate(java.util.Date date){
        return new java.sql.Date(date.getTime());
    }

    public static java.util.Date convertToUtilDate(java.sql.Date date) {
        return new java.util.Date(date.getTime());
    }
    

}
