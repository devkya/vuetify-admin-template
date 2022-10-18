# Vuetify Admin Template 기본편

[유투브 링크](https://www.youtube.com/watch?v=28npDAkwekk&list=PLlaP-jSd-nK91TqXFJQ7PVX5pOKoOA9v3&index=3)

## Vuetify project setting
1. editorconfig
코드 스타일 유지를 도와주는 파일  
extension editorconfig-for vscode 설치 -> .editorconfig 파일 생성  
```javascript
[*.{js,jsx,ts,tsx,vue}]
indent_style = spaceindent_size = 2
trim_trailing_whitespace = true
insert_final_newline = true
```

2. eslint-plugin-vuetify
`npm install eslint-plugin-vuetify --save-dev` vuetify plugin 설치  
```javascript
// .eslintrc.js
	extends: [
		'plugin:vue/essential',
		'eslint:recommended',
		'plugin:prettier/recommended',
		'plugin:vuetify/recommended',
	],
``` 


## Grid System
* flexbox를 사용하여 구축
* 12 Column Grid System
* 5가지 Breakpoints 제공

## Layout
```html
<!-- 기본 구조 -->
<template>
	<v-app>
		<v-app-bar app></v-app-bar>
		<v-navigation-drawer app></v-navigation-drawer>
		<v-main>
			<v-container>컨텐츠 영역</v-container>
		</v-main>
		<v-footer app></v-footer>
	</v-app>
</template>
<script>
```

## Breakpoints
컴포넌트 내에서 view port(application 화면)에 접근하는 방법  
```html
<v-card class="mt-5">
			<v-card-title> Vuetify Breakpoint Object </v-card-title>
			<v-container class="grey">
				$vuetify.breakpoint.xs : {{ $vuetify.breakpoint.xs }} <br />
				$vuetify.breakpoint.smAndDown : {{ $vuetify.breakpoint.smAndDown }}
				<br />
				$vuetify.breakpoint.height : {{ $vuetify.breakpoint.height }}
				<br />
				$vuetify.breakpoint.width : {{ $vuetify.breakpoint.width }}
				<br />
				$vuetify.breakpoint.thresholds : {{ $vuetify.breakpoint.thresholds }}
				<br />
			</v-container>
		</v-card>
```

## 궁금증
### Grid System vs Flex
아직까지 무슨 차이인지 모르겠다.  
`v-row`, `v-col` 에서도 align, justify 를 지원한다...  
