import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CarService } from './../../car.service';
import { HomeComponent } from './home.component';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let carService: CarService;
  const mockCars = [
    { manufacturer: 'a', ref: '123', price: '$1,000,000'},
    { manufacturer: 'b', ref: '456', price: '$90,000'},
    { manufacturer: 'c', ref: '789', price: '$350,000'}
  ];

  const oldResetTestingModule = TestBed.resetTestingModule;

  beforeAll((done) => (async () => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        CarService
      ],
      schemas: []
    });

    await TestBed.compileComponents();

    // prevent Angular from resetting testing module
    TestBed.resetTestingModule = () => TestBed;
    carService = TestBed.inject(CarService);
  })()
    .then(done)
    .catch(done.fail));

  afterAll(() => {
    TestBed.resetTestingModule = oldResetTestingModule;
    TestBed.resetTestingModule();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('method: ngOnInit', () => {
    beforeEach(() => {
      spyOn(carService, 'list').and.returnValue(of(mockCars));
      component.ngOnInit();
    });
    it('- should call car service and set variable', () => {
      expect(carService.list).toHaveBeenCalled();
      expect(component.cars.length).toBe(3);
      expect(component.cars).toEqual(mockCars);
    });
  });

  describe('method: addToFavourites', () => {
    beforeEach(() => {
      component.cars = mockCars;
      spyOn(localStorage, 'setItem');
    });
    it('- should add first item to favourites', () => {
      component.addToFavourites('123');
      expect(localStorage.setItem).toHaveBeenCalledWith('favouriteCars', '["123"]');
    });
    it('- should add additional favourites', () => {
      spyOn(localStorage, 'getItem').and.returnValue('["123"]');
      component.addToFavourites('456');
      expect(localStorage.setItem).toHaveBeenCalledWith('favouriteCars', '["123","456"]');
    });
  });
});
