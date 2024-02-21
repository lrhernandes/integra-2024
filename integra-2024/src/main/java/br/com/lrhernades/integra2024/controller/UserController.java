package br.com.lrhernades.integra2024.controller;

import br.com.lrhernades.integra2024.entity.User;
import org.springframework.web.bind.annotation.*;
import br.com.lrhernades.integra2024.services.UserService;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@RestController
@CrossOrigin
@RequestMapping("/user")
public record UserController(UserService userService) {

    @PostMapping
    public ResponseEntity salvar(@RequestBody User user){
        try {
            User createdUser = userService.salvar(user);
            return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }
    
    @GetMapping
    public ResponseEntity listarTodos() {
        try {
            List usersList =  userService.listarTodos();
            return new ResponseEntity<>(usersList, HttpStatus.OK);
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }
    
    @GetMapping("/{id}")
    public ResponseEntity listarPorId(@PathVariable Long id) {
        try {
            User user = userService.listarPorId(id);
            return new ResponseEntity<>(user, HttpStatus.OK);
        } catch (Exception e) {
            System.out.println("teste");
            throw new RuntimeException(e.getMessage());
        }
    }
    
    @PutMapping("/{id}")
    public ResponseEntity editar(@PathVariable Long id, @RequestBody User user) {
        try {
            User updatedUser = userService.editar(id, user);
            return new ResponseEntity<>(updatedUser, HttpStatus.OK);
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity deletar(@PathVariable Long id) {
        try {
            userService.deletar(id);
            return new ResponseEntity<>(id,HttpStatus.OK);
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }
}
