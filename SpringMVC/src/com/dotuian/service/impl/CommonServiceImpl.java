package com.dotuian.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dotuian.service.CommonService;
import com.dotuian.service.dto.SalaryDto;

@Service("commonServiceImpl")
@Transactional
public class CommonServiceImpl implements CommonService {

    public Map<String, String> getHobbyMap() {
        Map<String, String> hobbyMap = new HashMap<String, String>();
        hobbyMap.put("1", "1000");
        hobbyMap.put("2", "2000");
        hobbyMap.put("3", "3000");
        hobbyMap.put("4", "4000");
        return hobbyMap;
    }

    public List<SalaryDto> getSalaryList() {
        List<SalaryDto> salaryList = new ArrayList<SalaryDto>();
        for (int i = 1; i < 5; i++) {
            salaryList.add(new SalaryDto(String.valueOf(i), String
                    .valueOf(i * 1000)));
        }
        return salaryList;
    }
    
    @Override
    public List<String> getDaysOfBirthday() {
        List<String> years = new ArrayList<String>();
        for (int i = 1980; i <= 2015; i++) {
            years.add(String.valueOf(i));
        }
        return years;
    }
    
    @Override
    public List<String> getMonthsOfBirthday() {
        List<String> months = new ArrayList<String>();
        for (int i = 1; i <= 12; i++) {
            months.add(String.valueOf(i));
        }
        return months;
        
    }
    
    @Override
    public List<String> getYearsOfBirthday() {
        List<String> days = new ArrayList<String>();
        for (int i = 1; i <= 31; i++) {
            days.add(String.valueOf(i));
        }
        return days;
    }

}
