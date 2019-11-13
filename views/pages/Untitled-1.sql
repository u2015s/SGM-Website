create table staff( 
s_id varchar(25) not null,
 s_type varchar(25) ,
 primary key (s_id)  );
 
create table production_info (
 s_id varchar(25) not null,
 p_name varchar(25), 
 primary key (s_id),
 foreign key(s_id) references staff(s_id) );
 
create table catering_info ( 
s_id varchar(25) not null,
 ca_name varchar(25),
 primary key (s_id), foreign key(s_id) references staff(s_id) );

create table ca_salary_details ( contact_no int not null, 
salary int, 
primary key (contact_no)
 );
 
create table ca_contact_details ( contact_no int not null,
 s_id varchar(25) not null,
 primary key (contact_no,s_id),
 foreign key(contact_no) 
 references ca_salary_details(contact_no),
foreign key(s_id) references catering_info(s_id) );
 
create table p_salary_details ( contact_no int not null, 
salary int, 
primary key (contact_no)
);

  
create table p_contact_details ( contact_no int not null, 
s_id varchar(25) not null, 
primary key (contact_no,s_id), 
foreign key(contact_no) references p_salary_details(contact_no), 
 foreign key(s_id) references production_info(s_id)  
 );
  
  create table organises(
  s_id varchar(25) not null,
event_id varchar(25) not null,
primary key(s_id,event_id));

create table needs(
  s_id varchar(25) not null,
event_id varchar(25) not null,
model_no varchar(25) not null,
