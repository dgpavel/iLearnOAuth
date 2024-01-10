package ro.ilearn.geresource.web;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@Builder
public class Person {
    private UUID id;

}
