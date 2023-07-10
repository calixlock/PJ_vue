package org.amj.gallery.backend.entity;

import jakarta.persistence.*;
import lombok.Getter;

@Table(name = "items")// 꼭 " 큰따옴표 이용
@Getter
@Entity

public class Item {
    @Id // primaryKey 설정 적용
    @GeneratedValue(strategy = GenerationType.IDENTITY) // autoIncrement 설정 적용
    private int id;
    @Column(length = 50, nullable = false) // 문장길이, null  허용x 설정 적용
    private String name;

}
