import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CarService } from './../../car.service';
import { MyFavouritesComponent } from './my-favourites.component';
import { of } from 'rxjs';

describe('MyFavouritesComponent', () => {
  let component: MyFavouritesComponent;
  let carService: CarService;
  let fixture: ComponentFixture<MyFavouritesComponent>;
  const mockCars = [
    { manufacturer: 'a', ref: '123', price: '$1,000,000'},
    { manufacturer: 'b', ref: '456', price: '$90,000'},
    { manufacturer: 'c', ref: '789', price: '$350,000'}
  ];

  const oldResetTestingModule = TestBed.resetTestingModule;

  beforeAll((done) => (async () => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      declarations: [MyFavouritesComponent],
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
    fixture = TestBed.createComponent(MyFavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('method: ngOnInit', () => {
    beforeEach(() => {
      spyOn(carService, 'list').and.returnValue(of(mockCars));
      spyOn(localStorage, 'getItem').and.returnValue('["123"]');
      spyOn(component, 'updateFavourites');
      component.ngOnInit();
    });
    it('- should call car service and set variable', () => {
      expect(carService.list).toHaveBeenCalled();
      expect(component.cars.length).toBe(3);
      expect(component.cars).toEqual(mockCars);
    });
    it('- should update favourites', () => {
      expect(localStorage.getItem).toHaveBeenCalled();
      expect(component.updateFavourites).toHaveBeenCalledWith('["123"]');
    });
  });
});
