package com.gbk1021.gbk.mapper;

import com.gbk1021.gbk.dto.User;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {
    List<User> getAllUsers();
}
