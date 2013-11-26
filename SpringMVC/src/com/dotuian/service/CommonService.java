package com.dotuian.service;

import java.util.List;
import java.util.Map;

import com.dotuian.service.dto.SalaryDto;

public interface CommonService {

    public Map<String, String> getHobbyMap();

    public List<SalaryDto> getSalaryList();

    public List<String> getYearsOfBirthday();

    public List<String> getMonthsOfBirthday();

    public List<String> getDaysOfBirthday();

}
