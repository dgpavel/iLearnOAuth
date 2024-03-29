package ro.ilearn.geresource.web;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/v1/persons")
public class PersonController {

    @GetMapping
    @PreAuthorize("hasRole('AGENT')")
    public List<Person> findAll() {
        Object user = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        List<Person> items = new ArrayList<>();
        items.add(Person.builder()
                .id(UUID.randomUUID())
                .build());
        return items;
    }
}
