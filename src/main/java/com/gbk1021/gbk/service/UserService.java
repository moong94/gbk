package com.gbk1021.gbk.service;

import java.util.List;

import org.springframework.stereotype.Service;
import com.gbk1021.gbk.dto.User;
import com.gbk1021.gbk.mapper.UserMapper;

import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class UserService {

    private final UserMapper userMapper;

    public UserService(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    @Transactional
    public List<User> getAllUsers(){
        List<User> users = userMapper.getAllUsers();
        log.debug("getAllUsers result : {}", users);
        return users;
    }
}
