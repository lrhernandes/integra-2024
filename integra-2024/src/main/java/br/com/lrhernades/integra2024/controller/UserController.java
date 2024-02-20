package br.com.lrhernades.integra2024.controller;

import br.com.lrhernades.integra2024.entity.User;
import org.springframework.web.bind.annotation.*;
import br.com.lrhernades.integra2024.services.UserService;

import java.util.List;

@RestController
@RequestMapping("/user")
public record UserController(UserService userService) {
    
    @GetMapping
    public String inicial() {
        System.out.println("teste");
        return "teste";
    }
    
    /*
    @PostMapping("/user")
    public User salvar(@RequestBody User user){
        System.out.println("socorro");
        return userService.salvar(user);
    }*/
    
    /* @GetMapping("/users")
    public List listarTodos() {
        return userService.listarTodos();
    }
    
    @GetMapping("/user/{id}")
    public User listarPorId(@PathVariable Long id) {
        return userService.listarPorId(id);
    }
    
    @PutMapping("/user/{id}")
    public User editar(@PathVariable Long id, @RequestBody User user) {
        return userService.editar(id, user);
    }
    
    @DeleteMapping("/user/{id}")
    public void deletar(@PathVariable Long id) {
        userService.deletar(id);
    }*/
}
